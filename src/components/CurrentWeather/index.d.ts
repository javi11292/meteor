import React from "react"
import City from "models/City"

export interface CurrentWeatherProps {
    city: City,
}

declare const CurrentWeather: React.ComponentType<CurrentWeatherProps>

export default CurrentWeather