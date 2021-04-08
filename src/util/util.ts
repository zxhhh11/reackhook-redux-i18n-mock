import { HistoryBase } from './common'
import { getSessionStorage } from './storage'

export function getUserInfo(history: HistoryBase) {
    const authToken = getSessionStorage('authToken')
    if (authToken) {
        return authToken
    } else {
        history.push('/login')
        return {}
    }
}
