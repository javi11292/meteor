import { useStore } from "eztore"

import useStyles from "./useStyles"

function useLogic() {
    const [background] = useStore("background")
    const classes = useStyles({ background })

    return { classes, background }
}

export default useLogic