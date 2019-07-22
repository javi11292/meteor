import React from "react"
import City from "models/City"

export interface WeekDayWeather {
    /** Day of the week */
    day: string,
    /** Information for the week day */
    info: object,
}

/** Show information about a given day of the week */
declare const WeekDayWeather: React.ComponentType<WeekDayWeather>

export default WeekDayWeather