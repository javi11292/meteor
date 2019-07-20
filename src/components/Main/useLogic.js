import { useState, useEffect } from "react"
import useAPI from "hooks/useAPI"
import cities from "libraries/city.list"
import { useStore } from "eztore"
import useStyles from "./useStyles"

const BATCH = 1000

function iterate(citiesByLetter = {}, pos = 0) {
    return new Promise(resolve => {
        for (let i = 0; i < BATCH; i++) {
            const city = cities[pos + i]
            if (!city) break

            city.name = city.name.charAt(0).toUpperCase() + city.name.slice(1)
            const letter = city.name.charAt(0)

            if (!citiesByLetter[letter]) citiesByLetter[letter] = []

            citiesByLetter[letter].push(city)
        }

        const nextPos = pos + BATCH
        if (nextPos > cities.length) resolve(citiesByLetter)
        else setImmediate(() => resolve(iterate(citiesByLetter, nextPos)))
    })
}

function useLogic() {
    const classes = useStyles()
    const [, setCities] = useStore("cities")
    const [cityName, setCityName] = useState("")
    const { getCurrentWeather } = useAPI()

    useEffect(() => {
        async function loadCities() {
            setCities(await iterate())
        }

        loadCities()
    }, [setCities])

    useEffect(() => {
        async function test() {
            await getCurrentWeather("Madrid")
        }

        test()
    }, [getCurrentWeather])

    function onChange({ target }) {
        setCityName(target.value)
    }

    return { classes, cityName, onChange }
}

export default useLogic