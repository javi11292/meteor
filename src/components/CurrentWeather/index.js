import React from "react"
import moment from "moment"
import Util from "libraries/Util"
import Background from "components/Background"

import useLogic from "./useLogic"

const STRIPE = 22.5

function pascalToHg(pascal) {
    return Math.round(pascal / 1.333)
}

function getOrientation(deg) {
    switch (true) {
        case deg < STRIPE:
            return "N"
        case deg < 45 + STRIPE:
            return "NE"
        case deg < 90 + STRIPE:
            return "E"
        case deg < 135 + STRIPE:
            return "SE"
        case deg < 180 + STRIPE:
            return "S"
        case deg < 225 + STRIPE:
            return "SW"
        case deg < 270 + STRIPE:
            return "W"
        case deg < 315 + STRIPE:
            return "NW"
        default:
            return "N"

    }
}

const CurrentWeather = React.memo(props => {
    const { classes, weather } = useLogic(props)
    const { city } = props

    return (
        <div className={classes.root}>
            <Background />
            <div className={classes.city}>{city.name}</div>
            <div className={classes.time}>{moment().format("dddd, MMMM D, HH:mm")}</div>
            {weather && (
                <React.Fragment>
                    <div className={classes.info}>
                        <div>{Util.getCelsius(weather.main.temp)}</div>
                        <img
                            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon.slice(0, -1)}d@2x.png`}
                            alt=""
                            className={classes.icon} />
                        <div className={classes.details}>
                            <div className={classes.centerContent}>
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/pressure.png`}
                                    className={classes.smallIcon}
                                    alt="" />
                                <span>{pascalToHg(weather.main.pressure)} mm Hg</span>
                            </div>
                            <div className={classes.centerContent}>
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/humidity.png`}
                                    className={classes.smallIcon}
                                    alt="" />
                                <span>{weather.main.humidity}% humidity</span>
                            </div>
                            <div className={classes.centerContent}>
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/wind.png`}
                                    className={classes.smallIcon}
                                    alt="" />
                                <span>{Math.round(weather.wind.speed)}m/s {getOrientation(weather.wind.deg)}</span>
                            </div>
                        </div>
                    </div>
                    <div className={classes.description}>
                        {weather.weather[0].main}
                    </div>
                </React.Fragment>
            )}
        </div>
    )
})

export default CurrentWeather