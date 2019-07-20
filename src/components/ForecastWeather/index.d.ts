import React from "react"
import City from "models/City"

export interface ForecastWeatherProps {
    city: City,
}

declare const ForecastWeather: React.ComponentType<ForecastWeatherProps>

export default ForecastWeather