import React from "react"
import WeekDayWeather from "components/WeekDayWeather"

import useLogic from "./useLogic"

const DAYS = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]

const ForecastWeather = React.memo(props => {
    const { classes, weather } = useLogic(props)

    return (
        <div className={classes.root}>
            {weather && DAYS.map((day, index) => (
                <WeekDayWeather
                    weather={weather[index]}
                    key={day}
                    day={day} />
            ))}
        </div>
    )
})

export default ForecastWeather