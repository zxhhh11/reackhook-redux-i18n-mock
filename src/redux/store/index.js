import { applyMiddleware, createStore } from 'redux'

import { createLogger } from 'redux-logger'
import { persistStore } from 'redux-persist'
import rootReducer from '../reducers'
import thunkMiddleware from 'redux-thunk'

const loggerMiddleware = createLogger()
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, loggerMiddleware))

export const persistor = persistStore(store)
