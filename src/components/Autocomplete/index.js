import React from "react"
import { List, ListItem, ListItemText, Paper } from "@material-ui/core"

import useLogic from "./useLogic"


const Autocomplete = React.memo(props => {
    const { classes, filteredCities } = useLogic(props)

    return !filteredCities  || !props.show ? null : (
        <Paper className={classes.root}>
            <List className={classes.list}>
                {filteredCities.map(city => (
                    <ListItem
                        key={city.id}
                        onClick={() => props.onSelect(city)}
                        button>
                        <ListItemText primary={`${city.name} (${city.country})`} />
                    </ListItem>
                ))}
            </List>
        </Paper>
    )
})

export default Autocomplete