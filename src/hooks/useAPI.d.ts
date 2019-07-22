export interface APIInterface {
    /**
     * Get the current weather for the given city
     * @param city 
     */
    getCurrentWeather(city: string): Promise<string | object>

    /**
     * Get forecast weather for the given city
     * @param city 
     */
    getForecastWeather(city: string): Promise<string | object>

    /**
     * Get the list of cities
     */
    getCities(): Promise<string | object>
}

declare function useAPI(): APIInterface

export default useAPI