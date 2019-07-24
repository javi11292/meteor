class WebWorker {
    constructor(worker) {
        this.listeners = {}

        const code = worker.toString()
        const blob = new Blob([`(${code})()`])
        this.worker = new Worker(URL.createObjectURL(blob))
        this.worker.onmessage = ({ data }) => {
            const { type, payload } = data
            Object.entries(this.listeners).forEach(([id, callbacks]) => {
                callbacks.forEach(callback => {
                    if (id !== type) return
                    callback(payload)
                    this.removeListener(id, callback)
                })
            })
        }
    }

    postMessage(message, waitResponse) {
        this.worker.postMessage(message)
        if (waitResponse) return new Promise(resolve => {
            this.addListener(message.type, resolve)
        })
    }

    addListener(id, callback) {
        if (!this.listeners[id]) this.listeners[id] = new Set()
        this.listeners[id].add(callback)
    }

    removeListener(id, callback) {
        this.listeners[id].delete(callback)
        if (!this.listeners[id].size) delete this.listeners[id]
    }
}

export default WebWorker