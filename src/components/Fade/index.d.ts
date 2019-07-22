import React from "react"

export interface FadeProps {
    /** Fire the transition when the key changes */
    transitionKey?: string,
    /** Class applied to the child element */
    className?: string,
}

/** Show a fade transition */
declare const Fade: React.ComponentType<FadeProps>

export default Fade