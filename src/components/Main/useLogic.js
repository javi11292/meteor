import { useEffect } from "react"
import useAPI from "hooks/useAPI"
import cities from "libraries/city.list"
import { useStore } from "eztore"
import useStyles from "./useStyles"

const BATCH = 1000

function iterate(citiesByLetter = {}, pos = 0) {
    return new Promise(resolve => {
        for (let i = 0; i < BATCH; i++) {
            const city = cities[pos + i]
            if (!city) {
                resolve(citiesByLetter)
                break
            }

            const letter = city.name.charAt(0)

            if (!citiesByLetter[letter]) citiesByLetter[letter] = []

            citiesByLetter[letter].push(city)
        }

        setImmediate(() => resolve(iterate(citiesByLetter, pos + BATCH)))
    })
}

function useLogic() {
    const classes = useStyles()
    const [, setCities] = useStore("cities")
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

    return { classes }
}

export default useLogic