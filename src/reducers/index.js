import { BACKGROUNDS } from "libraries/constants"

let currentBackground = 0
function updateBackground() {
    const background = BACKGROUNDS[currentBackground]
    currentBackground = (currentBackground + 1) % BACKGROUNDS.length
    return background
}

export default {
    loading: {
        state: 0,
        reducer: (state, value) => value ? state + 1 : state - 1,
    },
    background: {
        state: BACKGROUNDS[0],
        reducer: updateBackground,
    }
}