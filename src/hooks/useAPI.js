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
    const [, setLoading] = useStore("loading")

    const makeRequest = useCallback(url => get(`${url}&appid=${API_KEY}`), [get])

    const getCurrentWeather = useCallback(city => makeRequest(`https://api.openweathermap.org/data/2.5/weather?id=${city}`), [makeRequest])

    const getForecastWeather = useCallback(city => makeRequest(`https://api.openweathermap.org/data/2.5/forecast?id=${city}`), [makeRequest])

    const getCities = useCallback(city => new Promise((resolve, reject) => {
        setLoading(true)
        webWorker.addListener(data => {
            resolve(data)
            setLoading(false)
        })

        webWorker.postMessage({ payload: city })
    }), [setLoading])

    const getInitialCity = useCallback(() => new Promise((resolve, reject) => {
        setLoading(true)
        webWorker.addListener(data => {
            resolve(data)
            setLoading(false)
        })

        webWorker.postMessage({ type: "initial" })
    }), [setLoading])

    return { getCurrentWeather, getCities, getForecastWeather, getInitialCity }
}

export default useAPI