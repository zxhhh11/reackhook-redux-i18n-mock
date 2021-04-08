import {
    AreaChartOutlined,
    BellOutlined,
    DashboardOutlined,
    FormOutlined,
    GlobalOutlined,
    LogoutOutlined,
    SettingOutlined,
    UnorderedListOutlined
} from '@ant-design/icons'
import { Avatar, Breadcrumb, Button, Image, Layout, Menu, message } from 'antd'
import { Link, Redirect, Route, Switch, withRouter } from 'react-router-dom'
import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Charts from '../page/Charts'
import Constants from '../redux/constants'
import Dashboard from '../page/Dashboard'
import Form from '../page/Form'
import { IconFont } from '../util/aliIcon'
import LangMenu from './LangMenu'
import List from '../page/List'
import { NavLink } from 'react-router-dom'
import NoPermission from '../page/result/NoPermission'
import { RoutersBase } from '../util/common'
import { UserLog } from '../redux/api/user'
import avatar from '../theme/img/3651518.gif'
import { getSessionStorage } from '../util/storage'
import imageUrl from '../theme/img/3654415.gif'
import { useState } from 'react'

interface User {
    lists: string[]
    num: number
    test: string
    role: string
}
const { SubMenu } = Menu
const { Header, Content, Sider, Footer } = Layout
const defaultMenu: RoutersBase[] = [
    {
        key: 'dashboard',
        path: '/dashboard',
        name: 'Dashboard',
        children: [
            {
                key: 'analysis',
                path: '/dashboard/analysis',
                name: 'Analysis',
                children: []
            }
        ]
    }
]
const breadcrumbNameMap: any = {
    '/': 'Home',
    '/dashboard': 'Dashboard',
    '/dashboard/analysis': 'Analysis',
    '/dashboard/monitor': 'Monitor',
    '/dashboard/workplace': 'Workplace',
    '/form': 'Form',
    '/form/basicForm': 'Basic Form',
    '/form/stepForm': 'Step Form',
    '/form/advancedForm': 'Advanced Form',
    '/list': 'List',
    '/list/search': 'Search List',
    '/list/search/articles': 'SearchList(Articles)',
    '/list/search/projects': 'SearchList(Projects)',
    '/list/tableList': 'Table Llst',
    '/list/basicList': 'Basic List',
    '/charts': 'Charts'
}
const AllMenuICons = {
    dashboard: <DashboardOutlined />,
    form: <FormOutlined />,
    list: <UnorderedListOutlined />,
    charts: <AreaChartOutlined />
}

function MainContent({ location, history }: any) {
    const dispatch = useDispatch()
    const role = useSelector((state: { user: User }) => state.user.role)
    const keys = location.pathname.substr(1).split('/').reverse()
    const [collapsed, setCollapsed] = useState(false)
    const [logoWidth, setlogoWidth] = useState('180px')
    const [current, setCurrent] = useState(keys ? keys.slice(1) : ['dashboard'])

    const [selectKeys, setSelectKeys] = useState(keys ? keys[0] : 'analysis')
    const [routeMap, setRouteMap] = useState(defaultMenu)

    const isRendered = useRef(false)

    const pathSnippets = location ? location.pathname.split('/').filter((i: any) => i) : []
    const extraBreadcrumbItems = pathSnippets.map((_: any, index: number) => {
        const url = `/${pathSnippets.slice(0, index + 1).join('/')}`
        return (
            <Breadcrumb.Item key={url}>
                <Link to={url}>{breadcrumbNameMap[url]}</Link>
            </Breadcrumb.Item>
        )
    })

    const unListen = history.listen((route: { pathname: any }) => {
        const text = route.pathname
        if (text === '/login' || text === '/') {
            return
        }
        if (text === '/dashboard') {
            return
        }
        const current = text.substr(text.lastIndexOf('/') + 1)
        if (current === 'charts') {
            setCurrent([])
        } else {
            const newOpenKey = text.substr(1, text.lastIndexOf('/') - 1)
            setCurrent(newOpenKey.split('/'))
        }
        setSelectKeys(current)
    })
    const breadcrumbItems = [
        <Breadcrumb.Item key="home">
            <Link to="/">Home</Link>
        </Breadcrumb.Item>
    ].concat(extraBreadcrumbItems)

    function onCollapse() {
        let width = '60px'
        if (collapsed) {
            width = '180px'
        }
        setlogoWidth(width)
        setCollapsed(!collapsed)
    }
    // 使页面menu的高亮与路由相对应
    function handleClick(keys: any[]): void {
        if (keys[keys.length - 1] === 'form' || keys[keys.length - 1] === 'dashboard') {
            keys = [keys[keys.length - 1]]
        } else if (keys.includes('form')) {
            keys.splice(keys.indexOf('form'), 1)
        } else if (keys.includes('dashboard')) {
            keys.splice(keys.indexOf('dashboard'), 1)
        }

        setCurrent(keys)
    }
    function UserLogout() {
        UserLog.logoutApi()
            .then((res) => {
                console.log(res)
                if (res.data.status === 200) {
                    sessionStorage.clear()
                    history.push('/login')
                } else {
                    message.error({
                        content: 'Logout failed, please try again!',
                        style: {
                            fontSize: '20px'
                        }
                    })
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }
    function routerFilter(routers: RoutersBase[], role: string, newRoute: any) {
        if (!routers) {
            return
        }
        routers.forEach((item) => {
            if (item.permission && item.permission.includes(role)) {
                let arr = []
                if (item.children) {
                    arr = routerFilter(item.children, role, [])
                }
                const obj = { ...item, children: arr }
                newRoute.push(obj)
            }
        })
        return newRoute
    }
    useEffect(() => {
        isRendered.current = true
        const user = getSessionStorage('authToken')
        if (!user) {
            history.push('/login')
            return
        }
        UserLog.getRole(user['userMessage'].AccountID).then((res) => {
            let role = ''
            if (res.data.data && isRendered.current) {
                role = res.data.data
                dispatch({ type: Constants.AUTHORIZED, role })
            }

            UserLog.getTokenMenu(role)
                .then((res) => {
                    if (isRendered.current) {
                        if (res && res.data && res.data.status === 200) {
                            const arr = routerFilter(res.data.data, role, [])
                            setRouteMap(arr)
                            return null
                        }
                    }
                })
                .catch((err) => console.log(err))
        })

        return () => {
            unListen()
            isRendered.current = false
        }
    }, [])

    function setMenu(RouterMap: RoutersBase[]) {
        if (!RouterMap) {
            return
        }
        return RouterMap.map((item: any) => {
            if (item.children && item.children.length === 0) {
                return (
                    <Menu.Item key={item.key} icon={AllMenuICons[item.key]}>
                        <NavLink exact to={item.path} className="blue">
                            {item.name}
                        </NavLink>
                    </Menu.Item>
                )
            } else {
                return (
                    <SubMenu key={item.key} title={item.name} icon={AllMenuICons[item.key]}>
                        {setMenu(item.children)}
                    </SubMenu>
                )
            }
        })
    }

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Header className="header">
                <span className="header-titile">小绘绘の练习</span>
                <div className="logo" style={{ width: logoWidth }}>
                    <img style={{ width: collapsed ? '80%' : '26%' }} src={imageUrl} alt="logo" />
                </div>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{ float: 'right', fontSize: '20px' }}
                >
                    <Menu.Item key="1">
                        <BellOutlined />
                    </Menu.Item>
                    <Menu.Item key="2" className="language-home">
                        <LangMenu></LangMenu>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Avatar src={<Image src={avatar} />} />
                    </Menu.Item>
                    <Menu.Item key="4">
                        <SettingOutlined />
                    </Menu.Item>
                    <Menu.Item key="5" onClick={UserLogout}>
                        <LogoutOutlined />
                    </Menu.Item>
                </Menu>
            </Header>
            <Layout>
                <Sider
                    width={200}
                    collapsible
                    collapsed={collapsed}
                    className="site-layout-background"
                    onCollapse={onCollapse}
                    collapsedWidth={48}
                >
                    <Menu selectedKeys={[selectKeys]} openKeys={current} onOpenChange={handleClick} mode="inline">
                        {setMenu(routeMap)}
                    </Menu>
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>{breadcrumbItems}</Breadcrumb>
                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280
                        }}
                    >
                        <Switch>
                            <Route path="/dashboard" component={Dashboard}></Route>
                            <Route path="/form" component={role === 'Common' ? NoPermission : Form}></Route>
                            <Route path="/list" component={List}></Route>
                            <Route path="/charts" component={Charts}></Route>
                            <Redirect exact path="/" to="/dashboard"></Redirect>
                            <Redirect path="*" to="/404"></Redirect>
                        </Switch>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>React + Hooks + TypeScript ©2021 Created by HuiHui</Footer>
                </Layout>
            </Layout>
        </Layout>
    )
}
export default withRouter(MainContent)
