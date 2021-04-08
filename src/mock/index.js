// const Mock = require('mockjs')

import Mock from 'mockjs'

Mock.setup({
    timeout: '200-600'
})

let configArray = []

// 遍历所有mock文件
const files = require.context('.', true, /\.js$/)
files.keys().forEach((key) => {
    if (key === './index.js' || key === './util.js') return
    configArray = configArray.concat(files(key).default)
})

// 注册所有的mock服务
configArray.forEach((item) => {
    for (const [path, target] of Object.entries(item)) {
        // console.log(path, target);
        const protocol = path.split('|')
        Mock.mock(new RegExp(`^${protocol[1]}`), protocol[0], target)
    }
})
