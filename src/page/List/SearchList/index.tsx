import { Redirect, Route, Switch } from 'react-router-dom'

import React from 'react'
import { RouterProps } from '../../../util/common'
import SearchListArticles from './SearchListArticles'
import SearchListProjects from './SearchListProjects'

// import { renderRoutes } from 'react-router-config'

export interface NewProps extends RouterProps {
    route: RouterProps
}

const SearchList = (props: NewProps) => {
    return (
        <div>
            SearchList
            <Switch>
                <Route path="/list/search/articles" component={SearchListArticles}></Route>
                <Route path="/list/search/projects" component={SearchListProjects}></Route>
                <Redirect exact path="/list/search" to="/list/search/articles"></Redirect>
                <Redirect path="*" to="/404"></Redirect>
            </Switch>
        </div>
    )
}

export default SearchList
