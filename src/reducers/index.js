import { backgrounds } from "assets/images"
import Util from "libraries/Util"

const preloadedImages = [0]
let nextBackground = 0

function updateBackground() {
    const background = backgrounds[nextBackground]
    nextBackground = (nextBackground + 1) % backgrounds.length
    preloadBackground(nextBackground)
    return background
}

function preloadBackground(index) {
    if (!preloadedImages.includes(index)) {
        Util.preloadImages([backgrounds[index]])
        preloadedImages.push(index)
    }
}

function initializeBackground() {
    preloadBackground(1)
    return backgrounds[0]
}

export default {
    loading: {
        state: 0,
        reducer: (state, value) => value ? state + 1 : state - 1,
    },
    background: {
        state: initializeBackground(),
        reducer: updateBackground,
    }
}