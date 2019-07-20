import React from "react"
import { CssBaseline } from "@material-ui/core"
import { Store } from "eztore"
import reducers from "reducers"
import useStyles from "./useStyles"
import Main from "components/Main"

const App = props => {
    const classes = useStyles(props)

    return (
        <Store reducers={reducers}>
            <CssBaseline />
            <div className={classes.root}>
                <Main />
            </div>
        </Store>
    )
}

export default App