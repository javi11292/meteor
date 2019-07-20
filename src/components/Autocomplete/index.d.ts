import React from "react"

export interface AutocompleteProps {
    cityName?: string,
    show: boolean,
    onSelect: Function,
}

declare const Autocomplete: React.ComponentType<AutocompleteProps>

export default Autocomplete