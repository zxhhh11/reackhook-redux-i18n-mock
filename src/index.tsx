import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'
import 'antd/dist/antd.css'
import './theme/style/main.css'
import './mock'
import './locales/i18n'

import { persistor, store } from './redux/store'

import App from './App'
import { PersistGate } from 'redux-persist/es/integration/react'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
