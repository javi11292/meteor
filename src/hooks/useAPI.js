import { useCallback } from "react"
import useFetch from "./useFetch"
import { API_KEY } from "libraries/constants"
import WebWorker from "libraries/WebWorker"
import worker from "libraries/worker"
import { useStore } from "eztore"

const webWorker = new WebWorker(worker)

webWorker.postMessage({ type: "load", payload: `${window.location.protocol}//${window.location.hostname}${process.env.PUBLIC_URL}/city.list.json` })

function useAPI() {
    const { get } = useFetch()
    const setLoading = useStore("loading", true)

    const makeRequest = useCallback(url => get(`${url}&appid=${API_KEY}`), [get])

    const getCurrentWeather = useCallback(city => makeRequest(`https://api.openweathermap.org/data/2.5/weather?id=${city}`), [makeRequest])

    const getForecastWeather = useCallback(city => makeRequest(`https://api.openweathermap.org/data/2.5/forecast?id=${city}`), [makeRequest])

    const getCities = useCallback(async city => {
        setLoading(true)
        const cities = await webWorker.postMessage({ type: "cities", payload: city }, true)
        setLoading(false)
        return cities
    }, [setLoading])

    const getInitialCity = useCallback(async () => {
        setLoading(true)
        const city = await webWorker.postMessage({ type: "initial" }, true)
        setLoading(false)
        return city
    }, [setLoading])

    return { getCurrentWeather, getCities, getForecastWeather, getInitialCity }
}

export default useAPI