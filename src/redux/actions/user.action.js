import { handleLoginApi, handleLogoutApi } from '../api/user'

export function handleLogin(data) {
    return (dispatch) => {
        return handleLoginApi(data)
            .then((res) => {
                dispatch({ type: 'UNAUTHORIZED', lists: [1, 2, 3, 4] })
                return res
            })
            .catch((error) => {
                console.log(error)
            })
    }
}

export function handleLogout() {
    return (dispatch) => {
        return handleLogoutApi()
            .then((res) => {
                console.log(res)
                dispatch({ type: 'CLEAR_ALL', data: {} }) // 此行无用 只是想让dispatch eslint检查不报错
                return res
            })
            .catch((error) => {
                console.log(error)
            })
    }
}
