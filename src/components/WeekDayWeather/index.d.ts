import React from "react"
import City from "models/City"

export interface CurrentWeatherProps {
    day: string,
}

declare const WeekDayWeather: React.ComponentType<CurrentWeatherProps>

export default WeekDayWeather