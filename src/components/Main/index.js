import React from "react"
import { TextField } from "@material-ui/core"
import Autocomplete from "components/Autocomplete"
import LoadingBar from "components/LoadingBar"
import CurrentWeather from "components/CurrentWeather"
import ForecastWeather from "components/ForecastWeather"
import Fade from "components/Fade"
import Background from "components/Background"

import useLogic from "./useLogic"

const Main = props => {
    const { classes, cityName, onChange, onSelect, inputRef, onFocus, onBlur, showDialog, city } = useLogic()

    return (
        <div className={classes.root} onClick={onBlur}>
            <Background className={classes.filter} />
            <LoadingBar />
            <div className={classes.container}>
                <div className={classes.weatherInfoContainer}>
                    {city &&
                        <Fade
                            className={classes.weatherInfo}
                            transitionKey={city.id}>
                            <CurrentWeather city={city} />
                            <ForecastWeather city={city} />
                        </Fade>
                    }
                </div>

                <div className={classes.citySearchContainer}>
                    <Autocomplete
                        show={showDialog}
                        onSelect={onSelect}
                        cityName={cityName} />
                    <TextField
                        onFocus={onFocus}
                        inputRef={inputRef}
                        fullWidth
                        className={classes.citySearch}
                        value={cityName}
                        onChange={onChange}
                        InputProps={{ classes: { notchedOutline: classes.outline } }}
                        placeholder="search city..."
                        margin="dense"
                        variant="outlined" />
                </div>
            </div>
        </div>
    )
}

export default Main