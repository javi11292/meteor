import React from "react"

export interface AutocompleteProps {
    /** Name filter */
    cityName?: string,
    /** True to show the dialog */
    show: boolean,
    /** Callback fired when an item is selected */
    onSelect: Function,
}

/** Show an autocomplete dialog for cities */
declare const Autocomplete: React.ComponentType<AutocompleteProps>

export default Autocomplete