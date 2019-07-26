import { makeStyles } from "@material-ui/core"

export default makeStyles(theme => ({
    root: {
        flex: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textShadow: "-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black",
        position: "relative",
    },
    city: {
        fontSize: "2.5rem",
        fontWeight: 300,
    },
    time: {
        fontSize: "1.3rem",
        fontWeight: 100,
    },
    info: {
        marginTop: theme.spacing(6),
        fontSize: "10rem",
        fontWeight: 100,
        flex: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        lineHeight: 1,
        [theme.breakpoints.down(800)]: {
            flexDirection: "column",
        }
    },
    description: {
        fontWeight: 100,
        fontSize: "1.3rem",
        marginBottom: theme.spacing(6),
        background: "rgba(0,0,0,0.7)",
        lineHeight: 1,
        padding: theme.spacing(1.5),
        borderRadius: theme.spacing(1),
    },
    icon: {
        height: "15rem",
        width: "15rem",
    },
    smallIcon: {
        height: "2.5rem",
        width: "2.5rem",
        margin: theme.spacing(2),
    },
    details: {
        display: "flex",
        flexDirection: "column",
        fontSize: "1.3rem",
        lineHeight: 2.5,
    },
    centerContent: {
        display: "flex",
        alignItems: "center",
    }
}))