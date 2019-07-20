import React from "react"
import useLogic from "./useLogic"

const Main = props => {
    const { classes } = useLogic()

    return (
        <div className={classes.root}>
            <input />
        </div>
    )
}

export default Main