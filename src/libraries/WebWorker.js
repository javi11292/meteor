class WebWorker {
    constructor(worker) {
        this.listeners = new Set()

        const code = worker.toString()
        const blob = new Blob([`(${code})()`])
        this.worker = new Worker(URL.createObjectURL(blob))
        this.worker.onmessage = ({ data }) => {
            this.listeners.forEach(callback => {
                callback(data)
                this.removeListener(callback)
            })
        }
    }

    postMessage(message) {
        this.worker.postMessage(message)
    }

    addListener(callback) {
        this.listeners.add(callback)
    }

    removeListener(callback) {
        this.listeners.delete(callback)
    }
}

export default WebWorker