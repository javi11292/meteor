export const symbol = Symbol("weather key")

export const WEATHER_KEYS = {
    CLEAR: "clear",
    CLOUDY: "cloudy",
    RAINY: "rainy",
    UNKNOW: "unknow",
}

class Util {
    static getKey(weather) {
        try {
            const id = weather[0].id.toString()

            if (id === "800") {
                return WEATHER_KEYS.CLEAR
            }

            if (id.startsWith("80")) {
                return WEATHER_KEYS.CLOUDY
            }

            if (id.startsWith("5")) {
                return WEATHER_KEYS.RAINY
            }
        } catch { }
        return WEATHER_KEYS.UNKNOW
    }

    static getCelsius(temperature) {
        return `${temperature < 273 ? "-" : "+"}${Math.round((temperature - 273))}º`
    }
}

export default Util