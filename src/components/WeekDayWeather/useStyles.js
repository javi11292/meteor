import { makeStyles } from "@material-ui/core"
import { symbol, WEATHER_KEYS } from "libraries/Util"

function getBackground(info) {
    if (!info) return "rgb(0,0,0)"
    switch (info[symbol]) {
        case WEATHER_KEYS.CLEAR:
            return "rgb(200,100,100)"
        case WEATHER_KEYS.CLOUDY:
            return "rgb(150,150,150)"
        case WEATHER_KEYS.RAINY:
            return "rgb(0,100,200)"
        default:
            return "rgb(0,0,0)"
    }
}

function getBorder(info) {
    if (!info) return "rgb(255,255,255)"
    switch (info[symbol]) {
        case WEATHER_KEYS.CLEAR:
            return "rgb(250,250,0)"
        case WEATHER_KEYS.CLOUDY:
            return "rgb(180,180,180)"
        case WEATHER_KEYS.RAINY:
            return "rgb(0,150,250)"
        default:
            return "rgb(255,255,255)"
    }
}

export default makeStyles(theme => ({
    root: {
        flex: 1,
        position: "relative",
    },
    background: {
        position: "absolute",
        width: "100%",
        height: "100%",
        background: props => getBackground(props.info),
        opacity: 0.35,
    },
    content: {
        fontSize: "1.2rem",
        fontWeight: 300,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        padding: theme.spacing(3),
        boxShadow: props => `1px 0 0 0 black, 0 -5px 0 0 ${getBorder(props.info)}`,
    },
    info: {
        flex: 1,
        position: "relative",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    iconContainer: {
        background: "rgba(0,0,0,0.2)",
        margin: theme.spacing(2),
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    icon: {
        height: theme.spacing(8),
    },
    grow: {
        animation: "$grow 1.5s linear infinite",
    },
    shake: {
        animation: "$shake 1.5s linear infinite",
    },
    noData: {
        position: "absolute",
        width: "100%",
        textAlign: "center",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
    },
    "@keyframes grow": {
        "50%": { transform: "scale(1.1)" },
        "100%": { transform: "scale(1)" },
    },
    "@keyframes shake": {
        "from": { transform: `rotate(0deg) translateX(${theme.spacing(0.2)}px) rotate(0deg)` },
        "to": { transform: `rotate(360deg) translateX(${theme.spacing(0.2)}px) rotate(-360deg)` },
    },
}))