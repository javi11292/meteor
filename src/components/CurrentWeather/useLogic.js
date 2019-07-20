import { useEffect } from "react"
import useAPI from "hooks/useAPI"

import useStyles from "./useStyles"

function useLogic(props) {
    const classes = useStyles()
    const { getCurrentWeather } = useAPI()

    useEffect(() => {
        async function makeRequest() {
            await getCurrentWeather(props.city.id)
        }

        makeRequest()
    }, [getCurrentWeather, props.city])

    return { classes }
}

export default useLogic