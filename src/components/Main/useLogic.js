import { useState, useEffect, useRef } from "react"
import { useStore } from "eztore"
import Util from "libraries/Util"
import { BACKGROUNDS } from "libraries/constants"
import useAPI from "hooks/useAPI"

import useStyles from "./useStyles"

function useLogic() {
    const classes = useStyles()
    const { getInitialCity } = useAPI()
    const [, updateBackground] = useStore("background")
    const [cityName, setCityName] = useState("")
    const [city, setCity] = useState()
    const [showDialog, setShowDialog] = useState(false)
    const inputRef = useRef()

    useEffect(() => {
        Util.preloadImages(BACKGROUNDS)
    }, [])

    useEffect(() => {
        async function makeRequest() {
            setCity(await getInitialCity())
        }

        makeRequest()
    }, [getInitialCity])

    useEffect(() => {
        if (city) updateBackground()
    }, [city, updateBackground])

    function onChange({ target }) {
        setCityName(target.value)
    }

    function onSelect(city) {
        setCity(city)
        setCityName("")
        inputRef.current.blur()
    }

    function onFocus() {
        setShowDialog(true)
    }

    function onBlur() {
        setShowDialog(document.activeElement === inputRef.current)
    }

    return { classes, cityName, onChange, onSelect, inputRef, onFocus, onBlur, showDialog, city }
}

export default useLogic