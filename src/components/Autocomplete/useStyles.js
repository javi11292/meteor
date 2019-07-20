import { makeStyles } from "@material-ui/core"

export default makeStyles(theme => ({
    root: {
        width: "100%",
        position: "absolute",
        top: 0,
        transform: "translateY(-100%)",
        display: "flex",
        flexDirection: "column",
    },
    list: {
        width: "100%",
    }
}))