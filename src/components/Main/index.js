import React from "react"
import useLogic from "./useLogic"
import { TextField } from "@material-ui/core"
import Autocomplete from "components/Autocomplete"

const Main = props => {
    const { classes, cityName, onChange } = useLogic()

    return (
        <div className={classes.root}>
            <div className={classes.weatherInfo}>

            </div>

            <div className={classes.citySearchContainer}>
                <Autocomplete cityName={cityName} />
                <TextField
                    fullWidth
                    className={classes.citySearch}
                    value={cityName}
                    onChange={onChange}
                    InputProps={{ classes: { notchedOutline: classes.outline, } }}
                    placeholder="search city..."
                    margin="dense"
                    variant="outlined" />
            </div>
        </div>
    )
}

export default Main