import {} from 'antd'

import { Button, Input } from 'antd'
import React, { useEffect, useState } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import AdvancedForm from './AdvancedForm'
import BasicForm from './BasicForm'
import NoPermission from '../result/NoPermission'
import StepForm from './StepForm'

const Form = (props: any) => {
    const [role, setRole] = useState('Admin')

    return (
        <div>
            <Switch>
                <Route
                    path="/form/basicform"
                    component={['Manager', 'Admin'].includes(role) ? BasicForm : NoPermission}
                ></Route>
                <Route
                    path="/form/stepform"
                    component={['Manager', 'Admin'].includes(role) ? StepForm : NoPermission}
                ></Route>
                <Route path="/form/advancedform" component={role === 'Admin' ? AdvancedForm : NoPermission}></Route>
                <Redirect exact path="/form" to="/form/basicform"></Redirect>

                <Redirect from="*" to="/404"></Redirect>
            </Switch>
        </div>
    )
}

export default Form
