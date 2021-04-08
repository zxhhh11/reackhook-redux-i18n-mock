import axios from 'axios'
import { getSessionStorage } from './storage'
import { message } from 'antd'

axios.defaults.headers = {
    'X-Requested-With': 'XMLHttpRequest'
}
axios.defaults.timeout = 1000 * 60 * 10
function request(params) {
    return new Promise((resolve, reject) => {
        axios(params)
            .then((res) => {
                console.log(res, 'res2')
                if (res.data) {
                    if (res.data.status === 200) {
                        resolve({
                            // data: res.data.data ? res.data.data : null
                            data: res.data ? res.data : null
                        })
                    } else if (res.data.status === 20122) {
                        message.error('无权限操作')
                    } else if (res.data.status === 20121) {
                        try {
                            document.location.replace('/login')
                        } catch (err) {
                            return err
                        }
                    } else {
                        resolve({
                            error: {
                                code: res.data.status,
                                message: res.data.message
                            }
                        })
                    }
                }
                reject(new Error('没有返回数据'))
                return false
            })
            .catch((error) => {
                console.log(error)
                resolve({
                    error: {
                        code: 500,
                        message: `${params.url}: ${error.message}`
                    }
                })
            })
    })
}
function getHeaders(options) {
    const headers = {
        'Content-Type': 'application/json',
        ...options
    }

    const token = getSessionStorage('authToken').token
    if (token) {
        headers.Authorization = token
    }
    return headers
}
function queryString(url, query) {
    const str = []
    for (const key in query) {
        if (query[key]) {
            str.push(`${key}=${query[key]}`)
        }
    }
    const paramStr = str.join('&')
    return paramStr ? `${url}${url.indexOf('?') > -1 ? '&' : '?'}${paramStr}` : url
}
export default {
    post(url, params, op) {
        return request({
            method: 'post',
            url,
            data: params,
            headers: getHeaders(op)
        })
    },
    get(url, params, op) {
        return request({
            method: 'get',
            url: queryString(url, params),
            headers: getHeaders(op)
        })
    },
    serverUrl(apiName) {
        return apiName
        // return `/api${apiName}`;
    },
    serverUrlMock(apiName) {
        return apiName
    }
    // queryString,
    // download
}
