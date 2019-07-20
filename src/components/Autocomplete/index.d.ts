import React from "react"

export interface AutocompleteProps {
    cityName?: string,
}

declare const Autocomplete: React.ComponentType<AutocompleteProps>

export default Autocomplete