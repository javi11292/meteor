import { makeStyles } from "@material-ui/core"

export default makeStyles(theme => ({
    root: {
        ...theme.typography.body1,
        position: "absolute",
        width: "100%",
        height: "100%",
    },
    container: {
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingLeft: theme.spacing(5),
        paddingRight: theme.spacing(5),
        paddingTop: theme.spacing(5),
    },
    filter: {
        filter: `blur(${theme.spacing(3)})`
    },
    weatherInfoContainer: {
        flex: "auto",
        alignSelf: "stretch",
        borderRadius: theme.spacing(1),
        overflow: "hidden",
    },
    weatherInfo: {
        display: "flex",
        flexDirection: "column",
    },
    citySearchContainer: {
        position: "relative",
        margin: theme.spacing(4),
        width: "30%",
        [theme.breakpoints.down(1000)]: {
            width: "100%",
        }
    },
    citySearch: {
        margin: 0,
    },
    outline: {
        borderRadius: theme.spacing(1.5),
        borderColor: theme.palette.primary.dark,
        "&:hover": {
            borderCololor: theme.palette.primary.light,
        }
    }
}))