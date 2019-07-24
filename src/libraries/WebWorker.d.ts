declare class WebWorker {
    /**
     * Post a message to the web worker
     * @param message 
     * @param waitResponse Register a listener if true
     */
    postMessage(message: { type: string, payload: any }, waitResponse: boolean): Promise<any>

    addListener(id: string, callback: Function): void

    removeListener(id: string, callback: Function): void
}

export default WebWorker