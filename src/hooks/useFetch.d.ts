export interface FetchInterface {
    /**
     * Make a get request to the given URL
     * @param url 
     */
    get(url: string): Promise<string | object>
}

declare function useFetch(): FetchInterface

export default useFetch