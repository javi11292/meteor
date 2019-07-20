import React from "react"

import useStyles from "./useStyles"

const WeekDayWeather = React.memo(props => {
    const classes = useStyles(props)

    return (
        <div className={classes.root}>
            <div className={classes.background} />
            <div className={classes.content}>
                {props.day}
            </div>
        </div>

    )
})

export default WeekDayWeather