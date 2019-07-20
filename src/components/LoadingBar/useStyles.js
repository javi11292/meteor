import { makeStyles } from "@material-ui/core"

export default makeStyles(theme => ({
    root: {
        position: "fixed",
        zIndex: "1500",
        width: "100%"
    },
    bar: {
        backgroundColor: "white",
        height: "4px",
    },
    barColorPrimary: {
        backgroundColor: "blue",
    },
}))