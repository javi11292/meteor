import React from "react"

export interface FadeBackgroundProps {
    /** Class aplied to the background element */
    className?: string,
}

/** Dynamic background from the store */
declare const FadeBackground: React.ComponentType<FadeBackgroundProps>

export default FadeBackground