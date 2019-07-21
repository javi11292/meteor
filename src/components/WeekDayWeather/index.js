import React from "react"
import classnames from "classnames"

import { symbol, WEATHER_KEYS } from "components/ForecastWeather/useLogic"

import useStyles from "./useStyles"

function getAnimation(info, classes) {
    switch (info[symbol]) {
        case WEATHER_KEYS.CLEAR:
            return classes.grow
        case WEATHER_KEYS.CLOUDY:
        case WEATHER_KEYS.RAINY:
            return classes.shake
        default:
            return
    }
}

const delays = [0, 200, 100, 400, 300, 600, 500]
let currentDelay = 0
function getDelay() {
    const delay = delays[currentDelay]
    currentDelay = (currentDelay + 1) % 6
    return delay + "ms"
}

const WeekDayWeather = React.memo(props => {
    const classes = useStyles(props)

    return (
        <div className={classes.root}>
            <div className={classes.background} />
            <div className={classes.content}>
                <div>{props.day}</div>
                <div className={classes.info}>
                    {!props.info ? "No data" :
                        <React.Fragment>
                            <div className={classes.iconContainer}>
                                <img
                                    style={{ animationDelay: getDelay() }}
                                    className={classnames(classes.icon, getAnimation(props.info, classes))}
                                    src={`http://openweathermap.org/img/wn/${props.info.weather[0].icon.slice(0, -1)}d@2x.png`}
                                    alt="" />
                            </div>
                            <div>{props.info.main.temp < 273 ? "-" : "+"}{Math.round((props.info.main.temp - 273))}º</div>
                        </React.Fragment>
                    }
                </div>
            </div>
        </div>
    )
})

export default WeekDayWeather