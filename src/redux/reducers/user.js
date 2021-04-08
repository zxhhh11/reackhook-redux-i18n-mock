import Constants from '../constants'

let lang = navigator.language || navigator.userLanguage
console.log(lang)
const defaultState = {
    lists: [],
    num: 0,
    test: 'this is a test',
    role: 'Common',
    locale: lang
}

const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case Constants.AUTHORIZED:
            return { ...state, role: action.role }
        case Constants.CLEAR_ALL:
            return { lists: [], num: 0, test: 'this is a test' }
        case Constants.INCREMENT:
            return { ...state, num: state.num + 3 }
        case Constants.DECREMENT:
            return { ...state, num: state.num - 5 }
        case Constants.CHANGE_LANGUAGE:
            return { ...state, locale: action.locale }
        default:
            return state
    }
}
export default userReducer
