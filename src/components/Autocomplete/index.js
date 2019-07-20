import React from "react"
import useLogic from "./useLogic"

const Autocomplete = React.memo(props => {
    const { classes, filteredCities } = useLogic(props)

    return (
        <div className={classes.root}>
            {filteredCities.map(city => (
                <div key={city.id}>
                    {city.name} ({city.country})
                </div>
            ))}
        </div>
    )
})

export default Autocomplete