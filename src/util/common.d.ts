import { RouteComponentProps } from 'react-router-dom'
import H from 'history'
import React from 'react'
import { PlainRoute } from 'react-router'
import { Location } from 'history'
import { Params, InjectedRouter } from 'react-router/lib/Router'
import { RouteComponentProps } from 'react-router-dom'
interface Location extends H.Location {
    query: { [key: string]: string }
}

/****************Props.location 参数类型定义********************/
export interface RouterProps extends RouteComponentProps {
    location?: Location
    params?: Params
    router?: InjectedRouter
    routes?: PlainRoute[]
}

export interface RouteProps {
    component?: React.FunctionComponent<string, never>
    path?: string
    routes?: RouteProps[]
    render?: () => JSX.Element
    exact?: boolean
    permission?: string[]
}
/****************history 参数类型定义********************/
export interface HistoryBase {
    [x: string]: any
    history?: H.History
}

export interface RoutersBase {
    key?: string
    // icon?: React.ReactNode | null
    name?: string
    path?: string
    children?: RoutersBase[]
    permission?: string[]
    // component?: React.ComponentType<any>
}

export interface CommonReducer {
    openKeys: string[]
    selectKey: string
}

export interface UserBase {
    username: string
    password: string
}

// export interface RouterProps {
//     location?: Location
//     params?: Params
//     router?: InjectedRouter
//     routes?: PlainRoute[]
// }
