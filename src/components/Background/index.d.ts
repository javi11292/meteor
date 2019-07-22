import React from "react"

export interface BackgroundProps {
    className?: string,
    image: string,
}

declare const Background: React.ComponentType<BackgroundProps>

export default Background