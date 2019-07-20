import React from "react"

export interface FadeProps {
    transitionKey?: string,
    className?: string,
}

declare const Fade: React.ComponentType<FadeProps>

export default Fade