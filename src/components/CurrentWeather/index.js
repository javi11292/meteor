import React from "react"
import moment from "moment"

import useLogic from "./useLogic"

const CurrentWeather = React.memo(props => {
    const { classes } = useLogic(props)
    const { city } = props

    return (
        <div className={classes.root}>
            <div className={classes.city}>{city.name}</div>
            <div className={classes.time}>{moment().format("dddd, MMMM D, HH:mm")}</div>
        </div>
    )
})

export default CurrentWeather