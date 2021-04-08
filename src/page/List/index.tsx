import { Redirect, Route, Switch } from 'react-router-dom'

import BasicList from './BasicList'
import { Input } from 'antd'
import React from 'react'
import SearchList from './SearchList'
import TableLlst from './TableLlst'
import { renderRoutes } from 'react-router-config'

const List = (props: any) => {
    return (
        <div>
            List Content
            <Switch>
                <Route path="/list/search" component={SearchList}></Route>
                <Route path="/list/tableList" component={TableLlst}></Route>
                <Route path="/list/basicList" component={BasicList}></Route>
                <Redirect exact path="/list" to="/list/basicList"></Redirect>
                <Redirect from="*" to="/404"></Redirect>
            </Switch>
            <Input placeholder="Basic usage" />
        </div>
    )
}

export default List
