import { makeStyles } from "@material-ui/core"

export default makeStyles(theme => ({
    root: {
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: -1,
    },
    background: {
        width: "100%",
        height: "100%",
        backgroundImage: props => `url(${process.env.PUBLIC_URL}/${props.background})`,
        backgroundSize: "cover",
    }
}))