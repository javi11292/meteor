import React from "react"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import classnames from "classnames"

import useStyles, { TIMEOUT } from "./useStyles"

const Fade = React.memo(props => {
    const classes = useStyles(props)

    return (
        <TransitionGroup
            className={classes.root}
            appear>
            <CSSTransition
                classNames={{
                    appear: classes.enter,
                    appearActive: classes.active,
                    enter: classes.enter,
                    enterActive: classes.active,
                    exit: classes.exit,
                }}
                timeout={TIMEOUT}
                key={props.transitionKey}>
                <div className={classnames(classes.container, props.className)}>
                    {props.children}
                </div>
            </CSSTransition>
        </TransitionGroup>
    )
})

export default Fade