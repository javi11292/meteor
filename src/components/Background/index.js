import React from "react"
import classnames from "classnames"
import Fade from "components/Fade"

import useLogic from "./useLogic"
import useStyles from "./useStyles"

const Background = React.memo(props => {
    const classes = useStyles(props)

    return <div className={classnames(classes.background, props.className)} />
})

const FadeBackground = React.memo(props => {
    const { classes, background } = useLogic(props)

    return (
        <div className={classes.root}>
            <Fade transitionKey={background}>
                <Background className={props.className} background={background} />
            </Fade>
        </div>
    )
})

export default FadeBackground