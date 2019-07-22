import { useCallback } from "react"
import useFetch from "./useFetch"
import { API_KEY } from "libraries/constants"

function useAPI() {
    const { get } = useFetch()

    const makeRequest = useCallback(url => get(`${url}&appid=${API_KEY}`), [get])

    const getCurrentWeather = useCallback(city => makeRequest(`https://api.openweathermap.org/data/2.5/weather?id=${city}`), [makeRequest])

    const getForecastWeather = useCallback(city => makeRequest(`https://api.openweathermap.org/data/2.5/forecast?id=${city}`), [makeRequest])

    const getCities = useCallback(() => {
        return get(`${window.location.protocol}//${window.location.hostname}${window.location.port ?
            ":" + window.location.port : ""}${process.env.PUBLIC_URL}/city.list.json`)
    }, [get])

    return { getCurrentWeather, getCities, getForecastWeather }
}

export default useAPI