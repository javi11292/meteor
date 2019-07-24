declare class WebWorker {
    postMessage(message: any): void

    addListener(callback: Function): void

    removeListener(callback: Function): void
}

export default WebWorker