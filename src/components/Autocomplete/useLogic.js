import { useState, useEffect } from "react"
import useAPI from "hooks/useAPI"

import useStyles from "./useStyles"

function useLogic(props) {
    const classes = useStyles()
    const [filteredCities, setFilteredCities] = useState()
    const { getCities } = useAPI()

    useEffect(() => {
        async function makeRequest() {
            if (!props.cityName) {
                setFilteredCities()
                return
            }

            const filteredCities = await getCities(props.cityName)
            setFilteredCities(filteredCities.length ? filteredCities : undefined)
        }

        makeRequest()
    }, [props.cityName, getCities])

    return { classes, filteredCities }
}

export default useLogic