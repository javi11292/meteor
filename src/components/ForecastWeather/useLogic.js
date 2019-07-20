import { useEffect } from "react"
import useAPI from "hooks/useAPI"

import useStyles from "./useStyles"

function useLogic(props) {
    const classes = useStyles()
    const { getForecastWeather } = useAPI()

    useEffect(() => {
        async function makeRequest() {
            await getForecastWeather(props.city.id)
        }

        makeRequest()
    }, [getForecastWeather, props.city])

    return { classes }
}

export default useLogic