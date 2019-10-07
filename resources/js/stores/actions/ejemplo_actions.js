import { SET_EJEMPLO } from "../types";

export function setEjemplo(val) {
    return {
        type: SET_EJEMPLO,
        payload: {
            tonio: val
        }
    }
}