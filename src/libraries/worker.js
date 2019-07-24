/* eslint-disable no-restricted-globals */
export default () => {
    const MADRID_ID = 6359304
    const MAX_CITIES = 10
    let citiesPromise = null

    self.onmessage = ({ data }) => {
        switch (data.type) {
            case "load":
                citiesPromise = getCities(data.payload).then(cities => {
                    const citiesByLetter = {}
                    for (let i = 0; i < cities.length; i++) {
                        const city = cities[i]

                        city.name = city.name.charAt(0).toUpperCase() + city.name.slice(1)
                        const letter = city.name.charAt(0)

                        if (!citiesByLetter[letter]) citiesByLetter[letter] = {}

                        citiesByLetter[letter][city.id] = city
                    }

                    return citiesByLetter
                })
                break
            case "initial":
                citiesPromise.then(cities => {
                    self.postMessage(cities.M[MADRID_ID])
                })
                break
            default:
                citiesPromise.then(citiesByName => {
                    const cities = filterCities(citiesByName[data.payload.charAt(0).toUpperCase()] || [], data.payload)
                    self.postMessage(cities)
                })
        }

        function getCities(url) {
            return self.fetch(url).then(response => response.json())
        }

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
    }
}