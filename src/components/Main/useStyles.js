import { makeStyles } from "@material-ui/core"

export default makeStyles(theme => ({
    root: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    weatherInfo: {
        flex: 1,
    },
    citySearchContainer: {
        position: "relative",
        margin: theme.spacing(4),
        width: "30%",
    },
    citySearch: {
        margin: 0,
    },
    outline: {
        borderRadius: theme.spacing(1.5),
    }
}))