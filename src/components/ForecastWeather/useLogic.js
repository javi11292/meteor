import { useState, useEffect } from "react"
import useAPI from "hooks/useAPI"
import moment from "moment"

import useStyles from "./useStyles"

function setMondayFirst(day) {
    const minusOne = day - 1
    return minusOne < 0 ? 6 : minusOne
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
                        [day]: data,
                    }
                }, {}))
            }
        }

        makeRequest()
    }, [getForecastWeather, props.city])

    return { classes, weather }
}

export default useLogic