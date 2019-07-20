import React from "react"
import WeekDayWeather from "components/WeekDayWeather"

import useLogic from "./useLogic"

const DAYS = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]

const ForecastWeather = React.memo(props => {
    const { classes } = useLogic(props)

    return (
        <div className={classes.root}>
            {DAYS.map(day => (
                <WeekDayWeather
                    weather="clear"
                    key={day}
                    day={day} />
            ))}
        </div>
    )
})

export default ForecastWeather