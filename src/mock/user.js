//.util 可以查看项目源码获取具体内容 或是下拉有详细介绍

import { RouterMap } from '../config/RouterMap'
import { arrayFind } from './util'

const users = [
    {
        id: 1,
        username: 'admin',
        password: 'admin',
        name: 'React hui',
        AccountID: '000001'
        // role: 'Admin'
    },
    {
        id: 2,
        username: 'user1',
        password: 'password',
        name: 'User One',
        AccountID: '000002'
    },
    {
        id: 3,
        username: 'user2',
        password: 'password',
        name: 'User Two',
        AccountID: '000003'
        // role: 'Manager'
    }
]

export default {
    //用户登录
    'post|/ms-base-server/jwt/token': (options) => {
        let token = ''
        let status = 401
        let userMessage = {}
        const user = JSON.parse(options.body)
        for (let i = 0; i < users.length; i += 1) {
            if (users[i].username === user.username && users[i].password === user.password) {
                userMessage = users[i]
                token =
                    'eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJkMTAxNDY4YWNhZjM0ZGRhYmFjOTY0NmQyZDkyMDExMyIsImlkIjoiZDEwMTQ2OGFjYWYzNGRkYWJhYzk2NDZkMmQ5MjAxMTMiLCJjb2RlIjoiYWRtaW4iLCJuYW1lIjoi6LaF57qn566h55CG5ZGYIiwiZXhwIjoxNTcxOTg4MzkwfQ.etLx6wELsJwWAHn8fxgz4qLjfuuPHlMiZpc1d2eULt1zpIdIEZulljbSreOcf60mUsNB_yXTHeJR6-tMAYB9hIRNy6-UeKipJ12xxv4S-3JLg7NceQ84-N30IA6RaODAPTk6YyZ5DGUyWmvGJGlYY0f0JR304c41twgJ1zfgwCI'
                status = 200
                break
            }
        }
        return {
            status,
            message: 'success',
            data: {
                state: 20101,
                token,
                userMessage
            }
        }
    },
    //授权验证
    'get|/authVerify': (options) => {
        const params = 'longtimenoseeIamdyingtoseeyou-1'
        const userId = parseInt(params.split('-')[1], 10) // 转化为10进制数字 待调查
        const user = arrayFind(users, 'id', userId)
        user.name = user.username

        return {
            status: user ? 200 : 404,
            message: 'success',
            data: user
        }
    },
    //退出登录
    'post|/ms-base-server/jwt/logout': () => ({
        status: 200,
        message: 'success',
        data: 'ok'
    }),
    'post|/ms-base-server/jwt/role': (options) => {
        let index = Number(options.body) % 3
        let arr = ['Common', 'Admin', 'Manager']
        return {
            status: 200,
            message: 'success',
            data: arr[index]
        }
    },
    // 获取路由页面
    'get|/ms-base-server/tokenMenu': (options) => {
        return {
            status: 200,
            message: 'success',
            data: RouterMap
        }
    }
}
