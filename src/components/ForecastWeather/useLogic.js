import { useState, useEffect } from "react"
import useAPI from "hooks/useAPI"
import moment from "moment"

import useStyles from "./useStyles"

export const symbol = Symbol("weather key")

export const WEATHER_KEYS = {
    CLEAR: "clear",
    CLOUDY: "cloudy",
    RAINY: "rainy",
    UNKNOW: "unknow",
}

function setMondayFirst(day) {
    const minusOne = day - 1
    return minusOne < 0 ? 6 : minusOne
}

function getKey(info) {
    try {
        const id = info.weather[0].id.toString()

        if (id === "800") {
            return WEATHER_KEYS.CLEAR
        }

        if (id.startsWith("80")) {
            return WEATHER_KEYS.CLOUDY
        }

        if (id.startsWith("5")) {
            return WEATHER_KEYS.RAINY
        }
    } catch { }
    return WEATHER_KEYS.UNKNOW
}

function useLogic(props) {
    const classes = useStyles()
    const [weather, setWeather] = useState()
    const { getForecastWeather } = useAPI()

    useEffect(() => {
        async function makeRequest() {
            const weather = await getForecastWeather(props.city.id)
            if (weather && weather.list && weather.list instanceof Array) {
                setWeather(weather.list.reduce((acc, data) => {
                    const day = setMondayFirst(moment(data.dt * 1000).day())

                    return {
                        ...acc,
                        [day]: { ...data, [symbol]: getKey(data) },
                    }
                }, {}))
            }
        }

        makeRequest()
    }, [getForecastWeather, props.city])

    return { classes, weather }
}

export default useLogic