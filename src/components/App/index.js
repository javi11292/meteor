import React from "react"
import { CssBaseline, MuiThemeProvider, createMuiTheme } from "@material-ui/core"
import { Store } from "eztore"
import reducers from "reducers"
import Main from "components/Main"

const theme = createMuiTheme({
    palette: {
        type: "dark",
        primary: {
            main: "rgb(220,220,220)"
        },
        background: {
            default: "rgb(10,10,10)"
        }
    },
    spacing: factor => `${0.5 * factor}rem`,
})

const App = props => {
    return (
        <Store reducers={reducers}>
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                <Main />
            </MuiThemeProvider>
        </Store>
    )
}

export default App