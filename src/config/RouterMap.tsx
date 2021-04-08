// import { DashboardOutlined, FormOutlined, UnorderedListOutlined } from '@ant-design/icons'

import { RouteProps, RoutersBase } from '../util/common'

import AdvancedForm from '../page/Form/AdvancedForm'
import Analysis from '../page/Dashboard/Analysis'
import BasicForm from '../page/Form/BasicForm'
import BasicList from '../page/List/BasicList'
import Dashboard from '../page/Dashboard'
import Form from '../page/Form'
import List from '../page/List'
import Monitor from '../page/Dashboard/Monitor'
import React from 'react'
import { Redirect } from 'react-router-dom'
import SearchList from '../page/List/SearchList'
import SearchListArticles from '../page/List/SearchList/SearchListArticles'
import SearchListProjects from '../page/List/SearchList/SearchListProjects'
import StepForm from '../page/Form/StepForm'
import TableLlst from '../page/List/TableLlst'
import Workplace from '../page/Dashboard/Workplace'

export const RouterMap: RoutersBase[] = [
    {
        key: 'dashboard',
        path: '/dashboard',
        name: 'Dashboard',
        permission: ['Common', 'Manager', 'Admin'],
        children: [
            {
                key: 'analysis',
                path: '/dashboard/analysis',
                name: 'Analysis',
                children: [],
                permission: ['Common', 'Manager', 'Admin']
            },
            {
                key: 'monitor',
                path: '/dashboard/monitor',
                name: 'Monitor',
                children: [],
                permission: ['Common', 'Manager', 'Admin']
            },
            {
                key: 'workplace',
                path: '/dashboard/workplace',
                name: 'Workplace',
                children: [],
                permission: ['Common', 'Manager', 'Admin']
            }
        ]
    },
    {
        key: 'form',
        path: '/form',
        name: 'Form',
        permission: ['Manager', 'Admin'],
        children: [
            {
                key: 'basicForm',
                path: '/form/basicForm',
                name: 'Basic Form',
                children: [],
                permission: ['Manager', 'Admin']
            },
            {
                key: 'stepForm',
                path: '/form/stepForm',
                name: 'Step Form',
                children: [],
                permission: ['Manager', 'Admin']
            },
            {
                key: 'advancedForm',
                path: '/form/advancedForm',
                name: 'Advanced Form',
                children: [],
                permission: ['Admin']
            }
        ]
    },
    {
        key: 'list',
        path: '/list',
        name: 'List',
        permission: ['Common', 'Manager', 'Admin'],
        children: [
            {
                key: 'search',
                path: '/list/search',
                name: 'Search List',
                permission: ['Manager', 'Admin'],
                children: [
                    {
                        key: 'articles',
                        path: '/list/search/articles',
                        name: 'SearchList(Articles)',
                        children: [],
                        permission: ['Admin']
                    },
                    {
                        key: 'projects',
                        path: '/list/search/projects',
                        name: 'SearchList(Projects)',
                        children: [],
                        permission: ['Manager', 'Admin']
                    }
                ]
            },
            {
                key: 'tableList',
                path: '/list/tableList',
                name: 'Table Llst',
                children: [],
                permission: ['Common', 'Manager', 'Admin']
            },
            {
                key: 'basicList',
                path: '/list/basicList',
                name: 'Basic List',
                children: [],
                permission: ['Common', 'Manager', 'Admin']
            }
        ]
    },
    {
        key: 'charts',
        path: '/charts',
        name: 'Charts',
        permission: ['Common', 'Manager', 'Admin'],
        children: []
    }
]
// export const RouterConfig: RouteProps[] = [
//     {
//         path: '/dashboard',
//         component: Dashboard,
//         permission: ['Common', 'Manager', 'Admin'],
//         routes: [
//             {
//                 path: '/dashboard/analysis',
//                 component: Analysis,
//                 routes: [],
//                 permission: ['Common', 'Manager', 'Admin']
//             },
//             {
//                 path: '/dashboard/monitor',
//                 component: Monitor,
//                 routes: [],
//                 permission: ['Common', 'Manager', 'Admin']
//             },
//             {
//                 path: '/dashboard/workplace',
//                 component: Workplace,
//                 routes: [],
//                 permission: ['Common', 'Manager', 'Admin']
//             },
//             {
//                 path: '/dashboard',
//                 exact: true,
//                 render: () => {
//                     return <Redirect to="/dashboard/analysis"></Redirect>
//                 },
//                 routes: [],
//                 permission: ['Common', 'Manager', 'Admin']
//             }
//         ]
//     },
//     {
//         path: '/form',
//         component: Form,
//         permission: ['Manager', 'Admin'],
//         routes: [
//             {
//                 path: '/form/basicForm',
//                 component: BasicForm,
//                 permission: ['Manager', 'Admin'],
//                 routes: []
//             },
//             {
//                 path: '/form/stepForm',
//                 permission: ['Manager', 'Admin'],
//                 component: StepForm,
//                 routes: []
//             },
//             {
//                 path: '/form/advancedForm',
//                 permission: ['Admin'],
//                 component: AdvancedForm,
//                 routes: []
//             },
//             {
//                 path: '/form',
//                 exact: true,
//                 render: () => {
//                     return <Redirect to="/form/basicForm"></Redirect>
//                 },
//                 routes: [],
//                 permission: ['Manager', 'Admin']
//             }
//         ]
//     },
//     {
//         path: '/list',
//         component: List,
//         permission: ['Common', 'Manager', 'Admin'],
//         routes: [
//             {
//                 path: '/list/search',
//                 component: SearchList,
//                 permission: ['Manager', 'Admin'],
//                 routes: [
//                     {
//                         path: '/list/search/articles',
//                         component: SearchListArticles,
//                         routes: [],
//                         permission: ['Manager', 'Admin']
//                     },
//                     {
//                         path: '/list/search/projects',
//                         component: SearchListProjects,
//                         routes: [],
//                         permission: ['Admin']
//                     },
//                     {
//                         path: '/list/search',
//                         exact: true,
//                         render: () => {
//                             return <Redirect to="/list/search/articles"></Redirect>
//                         },
//                         routes: []
//                     }
//                 ]
//             },
//             {
//                 path: '/list/tableList',
//                 component: TableLlst,
//                 routes: [],
//                 permission: ['Common', 'Manager', 'Admin']
//             },
//             {
//                 path: '/list/basicList',
//                 component: BasicList,
//                 routes: [],
//                 permission: ['Common', 'Manager', 'Admin']
//             },
//             {
//                 path: '/list',
//                 exact: true,
//                 render: () => {
//                     return <Redirect to="/list/basicList"></Redirect>
//                 },
//                 routes: [],
//                 permission: ['Common', 'Manager', 'Admin']
//             }
//         ]
//     },
//     {
//         path: '/',
//         exact: true,
//         render: () => {
//             return <Redirect to="/dashboard"></Redirect>
//         },
//         routes: []
//     }
// ]
