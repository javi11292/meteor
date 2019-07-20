import { useState, useEffect } from "react"
import { useStore } from "eztore"

import useStyles from "./useStyles"

const MAX_CITIES = 10

function filterCities(cities, name) {
    try {
        const regExp = new RegExp(`^${name}`, "img")
        let filteredCities = []
        for (const cityId in cities) {
            const city = cities[cityId]
            if (city.name.match(regExp)) filteredCities.push(city)
            if (filteredCities.length === MAX_CITIES) break
        }
        return filteredCities.sort((a, b) => a.name.localeCompare(b.name))
    } catch { }
    return []
}

function useLogic(props) {
    const classes = useStyles()
    const [cities] = useStore("cities")
    const [filteredCities, setFilteredCities] = useState()

    useEffect(() => {
        if (!props.cityName) {
            setFilteredCities()
            return
        }

        const filteredCities = filterCities(cities[props.cityName.charAt(0).toUpperCase()] || [], props.cityName)
        setFilteredCities(filteredCities.length ? filteredCities : undefined)
    }, [props.cityName, cities])

    return { classes, filteredCities }
}

export default useLogic