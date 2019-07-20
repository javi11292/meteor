import React from "react"

import useStyles from "./useStyles"

const WeekDayWeather = React.memo(props => {
    const classes = useStyles(props)

    return props.weather && (
        <div className={classes.root}>
            <div className={classes.background} />
            <div className={classes.content}>
                <div>{props.day}</div>
                <div>{props.weather.main.temp < 273 ? "-" : "+"}{Math.round((props.weather.main.temp - 273))}º</div>
            </div>
        </div>

    )
})

export default WeekDayWeather