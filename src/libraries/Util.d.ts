declare class Util {
    /**
     * Get the weather key from the given information
     * @param weather Weather information
     */
    static getKey(weather: object): string

    /**
     * Convert from kelvin to celsius
     * @param temperature 
     */
    static getCelsius(temperature: number): string

    /**
     * Preload images to load them faster later
     * @param images 
     */
    static preloadImages(images: string[]): void
}

export default Util