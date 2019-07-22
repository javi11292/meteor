import { BACKGROUNDS } from "libraries/constants"

let currentBackground = 0
function updateBackground() {
    const background = BACKGROUNDS[currentBackground]
    currentBackground = (currentBackground + 1) % BACKGROUNDS.length
    return background
}

export default {
    loading: {
        state: false,
        reducer: (state, value) => value,
    },
    cities: {
        state: {},
        reducer: (state, value) => value,
    },
    background: {
        state: BACKGROUNDS[0],
        reducer: updateBackground,
    }
}