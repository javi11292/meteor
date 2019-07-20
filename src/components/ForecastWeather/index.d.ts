import React from "react"
import City from "models/City"

export interface CurrentWeatherProps {
    city: City,
    weather: string,
}

declare const ForecastWeather: React.ComponentType<CurrentWeatherProps>

export default ForecastWeather