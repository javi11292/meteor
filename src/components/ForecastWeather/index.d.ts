import React from "react"
import City from "models/City"

export interface ForecastWeatherProps {
    /** City to show information for */
    city: City,
}

/** Information about the next 5 days weather*/
declare const ForecastWeather: React.ComponentType<ForecastWeatherProps>

export default ForecastWeather