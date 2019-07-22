import { useState, useEffect, useRef } from "react"
import useAPI from "hooks/useAPI"
import { useStore } from "eztore"

import useStyles from "./useStyles"

const BATCH = 1000

function iterate(cities, citiesByLetter = {}, pos = 0) {
    return new Promise(resolve => {
        for (let i = 0; i < BATCH; i++) {
            const city = cities[pos + i]
            if (!city) break

            city.name = city.name.charAt(0).toUpperCase() + city.name.slice(1)
            const letter = city.name.charAt(0)

            if (!citiesByLetter[letter]) citiesByLetter[letter] = {}

            citiesByLetter[letter][city.id] = city
        }

        const nextPos = pos + BATCH
        if (nextPos > cities.length) resolve(citiesByLetter)
        else setImmediate(() => resolve(iterate(cities, citiesByLetter, nextPos)))
    })
}

function useLogic() {
    const classes = useStyles()
    const [, updateBackground] = useStore("background")
    const [cities, setCities] = useStore("cities")
    const [cityName, setCityName] = useState("")
    const [city, setCity] = useState()
    const [showDialog, setShowDialog] = useState(false)
    const { getCities } = useAPI()
    const inputRef = useRef()

    useEffect(() => {
        async function loadCities() {
            const cities = await getCities()
            setCities(await iterate(cities))
        }

        loadCities()
    }, [setCities, getCities])

    useEffect(() => {
        if (cities.M) setCity(cities.M[6359304])
        else setCity()
    }, [cities])

    useEffect(() => {
        if (city) updateBackground()
    }, [city, updateBackground])

    function onChange({ target }) {
        setCityName(target.value)
    }

    function onSelect(city) {
        setCity(city)
        setCityName("")
        inputRef.current.blur()
    }

    function onFocus() {
        setShowDialog(true)
    }

    function onBlur() {
        setShowDialog(document.activeElement === inputRef.current)
    }

    return { classes, cityName, onChange, onSelect, inputRef, onFocus, onBlur, showDialog, city }
}

export default useLogic