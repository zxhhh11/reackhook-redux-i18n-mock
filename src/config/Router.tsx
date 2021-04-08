import { Redirect, Route, Switch } from 'react-router-dom'

import AdvancedForm from '../page/Form/AdvancedForm'
import Analysis from '../page/Dashboard/Analysis'
import BasicForm from '../page/Form/BasicForm'
import BasicList from '../page/List/BasicList'
import Dashboard from '../page/Dashboard'
import Form from '../page/Form'
import List from '../page/List'
import Monitor from '../page/Dashboard/Monitor'
import React from 'react'
import SearchList from '../page/List/SearchList'
import SearchListArticles from '../page/List/SearchList/SearchListArticles'
import SearchListProjects from '../page/List/SearchList/SearchListProjects'
import StepForm from '../page/Form/StepForm'
import TableLlst from '../page/List/TableLlst'
import Workplace from '../page/Dashboard/Workplace'

const AllRouter = () => {
    return (
        <Switch>
            <Route path="/home/dashboard" component={Dashboard}>
                <Route path="/home/dashboard/analysis" component={Analysis} />
                <Route path="/home/dashboard/monitor" component={Monitor} />
                <Route path="/home/dashboard/workplace" component={Workplace} />
                <Redirect exact path="/home/dashboard" to="/home/dashboard/analysis"></Redirect>
            </Route>
            <Route path="/home/form" component={Form}>
                <Route path="/home/form/basicform" component={BasicForm} />
                <Route path="/home/form/stepform" component={StepForm} />
                <Route path="/home/form/advanced-form" component={AdvancedForm} />
                <Redirect path="/home/form" to="/home/form/basicform"></Redirect>
            </Route>
            <Route path="/list" component={List}>
                <Route path="/list/search" component={SearchList}>
                    <Route path="/list/search/articles" component={SearchListArticles} />
                    <Route path="/list/search/projects" component={SearchListProjects} />
                    <Redirect path="/list/search" to="/list/search/articles"></Redirect>
                </Route>
                <Route path="/list/table-list" component={TableLlst} />
                <Route path="/list/basic-list" component={BasicList} />
                <Redirect path="/list" to="/list/search/articles"></Redirect>
            </Route>
        </Switch>
    )
}

export default AllRouter
