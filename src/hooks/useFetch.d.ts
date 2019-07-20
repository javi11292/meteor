export interface Props {
    /**
     * Make a get request to the given URL
     * @param url 
     */
    get(url: string): Promise<string | object>
}

declare function useFetch(): Props

export default useFetch