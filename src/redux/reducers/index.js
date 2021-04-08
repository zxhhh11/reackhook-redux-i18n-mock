import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import userReducer from './user'

const persistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2 // 查看 'Merge Process' 部分的具体情况
}
const rootReducer = combineReducers({
    // user: userReducer
    user: persistReducer(persistConfig, userReducer)
})
export default rootReducer
