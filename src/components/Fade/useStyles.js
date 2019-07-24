import { makeStyles } from "@material-ui/core"

export const TIMEOUT = 1000

export default makeStyles(theme => ({
    enter: {
        opacity: "0",
    },
    active: {
        opacity: "1",
        transition: `opacity ${TIMEOUT}ms`
    },
    exit: {
        opacity: "0",
        transition: `opacity ${TIMEOUT}ms`
    },
    container: {
        position: "absolute",
        width: "100%",
        height: "100%",
        overflow: "auto",
    },
    root: {
        width: "100%",
        height: "100%",
        position: "relative",
    }
}))