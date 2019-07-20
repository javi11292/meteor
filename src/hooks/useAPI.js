import { useCallback } from "react"
import useFetch from "./useFetch"
import { API_KEY } from "libraries/constants"

function useAPI() {
    const { get } = useFetch()

    const makeRequest = useCallback(url => get(`${url}&appid=${API_KEY}`), [get])

    const getCurrentWeather = useCallback(city => makeRequest(`https://api.openweathermap.org/data/2.5/weather?q=${city}`), [makeRequest])

    return { getCurrentWeather }
}

export default useAPI