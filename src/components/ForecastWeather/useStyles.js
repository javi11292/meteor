import { makeStyles } from "@material-ui/core"

export default makeStyles(theme => ({
    root: {
        display: "flex",
        [theme.breakpoints.down(800)]: {
            flexDirection: "column",
        }
    },
    day: {
        flex: 1,
    }
}))