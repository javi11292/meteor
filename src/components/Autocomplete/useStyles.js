import { makeStyles } from "@material-ui/core"

export default makeStyles(theme => ({
    root: {
        position: "absolute",
        top: 0,
        transform: "translateY(-100%)",
        display: "flex",
        flexDirection: "column",
    },
}))