import * as actionTypes from "./ActionTypes"

export const increasevalue=() => {
    return {
        type: actionTypes.INCREMENT
    }
}

export const decreasevalue=() => {
    return {
        type: actionTypes.DECREMENT
    }
}
// export const costvalue=() => {
//     return {
//         type: actionTypes.COST
//     }
// }