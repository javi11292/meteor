import { useCallback } from "react"
import { useStore } from "eztore"

function useFetch() {
    const [, setLoading] = useStore("loading")

    const get = useCallback(url => {
        async function makeRequest() {
            setLoading(true)
            let result = null
            try {
                const response = await fetch(url)
                result = await response.text()
                result = JSON.parse(result)
            } catch { }
            setLoading(false)

            console.log(url, result)
            return result
        }

        return makeRequest()
    }, [setLoading])

    return { get }
}

export default useFetch