import { DatePicker, Input } from 'antd'
import { Redirect, Route, Switch } from 'react-router-dom'

import Analysis from './Analysis'
import Monitor from './Monitor'
import React from 'react'
import Workplace from './Workplace'

// import { renderRoutes } from 'react-router-config'

const Dashboard = (props: any) => {
    function onChange(date: any, dateString: string) {
        console.log(date, dateString, props)
    }
    return (
        <div>
            <Switch>
                {/* {renderRoutes(props.route.routes)} */}
                <Route path="/dashboard/analysis" component={Analysis}></Route>
                <Route path="/dashboard/monitor" component={Monitor}></Route>
                <Route path="/dashboard/workplace" component={Workplace}></Route>
                <Redirect exact path="/dashboard" to="/dashboard/analysis"></Redirect>
                <Redirect exact from="*" to="/404"></Redirect>
            </Switch>
            <DatePicker onChange={onChange} />
            <Input placeholder="Basic usage" />
        </div>
    )
}

export default Dashboard
