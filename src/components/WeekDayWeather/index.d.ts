import React from "react"
import City from "models/City"

export interface WeekDayWeather {
    day: string,
    weather: object,
}

declare const WeekDayWeather: React.ComponentType<WeekDayWeather>

export default WeekDayWeather