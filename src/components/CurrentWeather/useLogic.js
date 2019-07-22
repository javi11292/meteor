import { useState, useEffect } from "react"
import useAPI from "hooks/useAPI"
import Util, { symbol } from "libraries/Util"

import useStyles from "./useStyles"

function useLogic(props) {
    const classes = useStyles()
    const [weather, setWeather] = useState()
    const { getCurrentWeather } = useAPI()

    useEffect(() => {
        async function makeRequest() {
            const weather = await getCurrentWeather(props.city.id)
            if (weather) {
                setWeather({ ...weather, [symbol]: Util.getKey(weather) })
            }
        }

        makeRequest()
    }, [getCurrentWeather, props.city])

    return { classes, weather }
}

export default useLogic