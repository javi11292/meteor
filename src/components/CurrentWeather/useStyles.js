import { makeStyles } from "@material-ui/core"

export default makeStyles(theme => ({
    root: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/city0.png)`,
        backgroundSize: "cover",
    },
    city: {
        marginTop: theme.spacing(3),
        fontSize: "2.5rem",
        fontWeight: 300,
    },
    time: {
        fontSize: "1.3rem",
        fontWeight: 100,
    }
}))