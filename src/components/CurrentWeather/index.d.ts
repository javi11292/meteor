import React from "react"
import City from "models/City"

export interface CurrentWeatherProps {
    /** City to show information for */
    city: City,
}

/** Information about the current weather */
declare const CurrentWeather: React.ComponentType<CurrentWeatherProps>

export default CurrentWeather