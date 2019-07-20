import React from "react"
import { Fade, LinearProgress } from "@material-ui/core"
import { useStore } from "eztore"

import useStyles from "./useStyles"

const LoadingBar = React.memo(props => {
    const [loading] = useStore("loading")
    const classes = useStyles(props)

    return (
        <Fade
            timeout={500}
            className={classes.root}
            in={loading}>
            <LinearProgress
                classes={{ root: classes.bar, barColorPrimary: classes.barColorPrimary }} />
        </Fade>
    )
})

export default LoadingBar