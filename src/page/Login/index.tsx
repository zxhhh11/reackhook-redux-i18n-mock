import { Button, Checkbox, DatePicker, Dropdown, Form, Input, Menu, message } from 'antd'
import { DingdingOutlined, LockOutlined, UserOutlined } from '@ant-design/icons'
import React, { useEffect } from 'react'

import LangMenu from '../../component/LangMenu'
import { RouteComponentProps } from 'react-router-dom'
import { UserLog } from '../../redux/api/user'
import { setSessionStorage } from '../../util/storage'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

// import Constants from '../../redux/constants'

export interface loginProps {
    username: string
    password: string
}

// const Login: React.FC<RouteComponentProps> = ({ history }) => {
const Login: React.FC<RouteComponentProps> = () => {
    // const dispatch = useDispatch()
    const { t, i18n } = useTranslation()
    const history = useHistory()
    console.log(history, 'history')
    const onFinish = (values: loginProps) => {
        console.log('Received values of form: ', values)
        if (values) {
            UserLog.loginApi(values)
                .then((res) => {
                    console.log(res, 'res')
                    if (res.data.status === 200) {
                        setSessionStorage('authToken', res.data.data)
                        // setUserInfo(res.data.data.userMessage)
                        history.push('/dashboard/analysis')
                    } else {
                        message.error({
                            content: 'Login failed, please try again!',
                            style: {
                                fontSize: '20px'
                            }
                        })
                    }
                })
                .catch((err) => {
                    console.log(err)
                })

            //
        }
    }

    useEffect(() => {
        sessionStorage.clear()
    }, [])

    return (
        <div className="login-layout">
            <div className="language">
                <LangMenu></LangMenu>
                {/* <DatePicker /> */}
            </div>
            <div className="content">
                <div className="panel">
                    <div className="welcome">
                        <div className="logo">
                            <DingdingOutlined />
                            <a href="https://www.bing.com" className="help">
                                xiaohuihui &gt;
                            </a>
                        </div>
                        <h2>欢迎指教</h2>
                        <p className="article">
                            {t('Welcome to React')}&nbsp;, &nbsp;This is a project for practice, which uses react to
                            develop with typescript and react hooks
                        </p>
                    </div>
                    <div className="form">
                        <h2>Login Form</h2>
                        <Form
                            name="normal_login"
                            className="login-form"
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                        >
                            <Form.Item
                                name="username"
                                rules={[{ required: true, message: 'Please input your Username!' }]}
                            >
                                <Input
                                    prefix={<UserOutlined className="site-form-item-icon" />}
                                    placeholder="Username"
                                />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[{ required: true, message: 'Please input your Password!' }]}
                            >
                                <Input
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="Password"
                                />
                            </Form.Item>
                            <Form.Item>
                                <Form.Item name="remember" valuePropName="checked" noStyle>
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>

                                <a className="login-form-forgot" href="">
                                    Forgot password
                                </a>
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    Log in
                                </Button>
                                Or <a href="">register now!</a>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
