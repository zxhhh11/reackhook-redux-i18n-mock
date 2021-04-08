/* eslint-disable no-undef */
import 'moment/locale/zh-cn'

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import { ConfigProvider } from 'antd'
import Home from './page/Home'
import Login from './page/Login'
import NoPermission from './page/result/NoPermission'
import NotFound from './page/result/NotFound'
// import { PrivateRoute } from './PrivateRoute'
import React from 'react'
import { allLang } from './util/emit'
import { useSelector } from 'react-redux'

interface User {
    lists: string[]
    num: number
    test: string
    locale: string
}

// moment.locale('en')
function App() {
    const locale = useSelector((state: { user: User }) => state.user.locale)
    return (
        <ConfigProvider locale={allLang[locale]}>
            <Router>
                <Switch>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/404" component={NotFound}></Route>
                    <Route path="/403" component={NoPermission}></Route>
                    <Route path="/" component={Home}></Route>
                </Switch>
            </Router>
        </ConfigProvider>
    )
}

export default App
