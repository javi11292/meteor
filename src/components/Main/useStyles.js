import { makeStyles } from "@material-ui/core"

export default makeStyles(theme => ({
    root: {
        ...theme.typography.body1,
        position: "absolute",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    background: {
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/city0.png)`,
        backgroundSize: "cover",
    },
    filter: {
        position: "absolute",
        width: "100%",
        height: "100%",
        filter: `blur(${theme.spacing(3)}px)`
    },
    weatherInfoContainer: {
        flex: 1,
        alignSelf: "stretch",
        marginLeft: theme.spacing(5),
        marginRight: theme.spacing(5),
        marginTop: theme.spacing(5),
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