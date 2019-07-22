import { makeStyles } from "@material-ui/core"

export default makeStyles(theme => ({
    root: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/city0.png)`,
        backgroundSize: "cover",
        textShadow: "-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black",
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
        fontSize: "10rem",
        fontWeight: 100,
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        lineHeight: 1,
    },
    description: {
        fontWeight: 100,
        fontSize: "1.3rem",
        margin: theme.spacing(6),
        background: "rgba(0,0,0,0.7)",
        lineHeight: 1,
        padding: theme.spacing(1),
        borderRadius: theme.spacing(1),
    },
    icon: {
        height: "15rem",
    },
    smallIcon: {
        height: "2.5rem",
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