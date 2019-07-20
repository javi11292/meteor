import { makeStyles } from "@material-ui/core"

const COLORS = {
    clear: "rgb(200,100,100)",
    cloudy: "rgb(150,150,150)",
    rainy: "rgb(0,100,200)",
}

const BORDERS = {
    clear: "rgb(250,250,0)",
    cloudy: "rgb(150,150,150)",
    rainy: "rgb(0,100,200)",
}

function getColor(weather) {
    const key = getKey(weather)
    return COLORS[key]
}

function getBorder(weather) {
    const key = getKey(weather)
    return BORDERS[key]
}

function getKey(weather) {
    try {
        const id = weather.weather[0].id.toString()

        if (id === "800") {
            return "clear"
        }

        if (id.startsWith("80")) {
            return "cloudy"
        }

        if (id.startsWith("5")) {
            return "rainy"
        }
    } catch { }
    return "clear"
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
        background: props => getColor(props.weather),
        opacity: 0.3,
    },
    content: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        padding: theme.spacing(4),
        boxShadow: props => `1px 0 0 0 black, 0 -5px 0 0 ${getBorder(props.weather)}`,
    }
}))