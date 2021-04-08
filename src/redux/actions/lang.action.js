import * as types from '../constants'

export function changeLanguage(val) {
    return (dispatch, state) => {
        dispatch({
            type: types.CHANGE_LANGUAGE,
            val
        })
    }
}
