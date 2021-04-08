// 获取url 中传递的参数
export function getUrlParams(url) {
    const d = decodeURIComponent
    let queryString = url ? url.split('?')[1] : window.location.search.slice(1)
    const obj = {}
    if (queryString) {
        queryString = queryString.split('#')[0] // eslint-disable-line
        const arr = queryString.split('&')
        for (let i = 0; i < arr.length; i += 1) {
            const a = arr[i].split('=')
            let paramNum
            const paramName = a[0].replace(/\[\d*\]/, (v) => {
                paramNum = v.slice(1, -1)
                return ''
            })
            const paramValue = typeof a[1] === 'undefined' ? true : a[1]
            if (obj[paramName]) {
                if (typeof obj[paramName] === 'string') {
                    obj[paramName] = d([obj[paramName]])
                }
                if (typeof paramNum === 'undefined') {
                    obj[paramName].push(d(paramValue))
                } else {
                    obj[paramName][paramNum] = d(paramValue)
                }
            } else {
                obj[paramName] = d(paramValue)
            }
        }
    }
    return obj
}
//获取动态路由id ??? 待验证
export function getId(url) {
    const locationUrl = url.split('?')[0]
    return locationUrl.slice(locationUrl.lastIndexOf('/') + 1)
}

export function arrayFind(arr, key, value) {
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i][key] === value) {
            return arr[i]
        }
    }
    return false // 这里需要确认  此行为新添加 需确认是否使用正常
}
// 查
export function query(options, staffs) {
    let pagin = null
    const params = getUrlParams(options.url)
    const pno = params.page
    const pageCount = params.limit
    const start = (pno - 1) * pageCount
    let end = pno * pageCount
    if (end > staffs.length) {
        end = staffs.length
    }
    pagin = staffs.slice(start, end)
    if (!pagin) {
        pagin = staffs
    }
    return {
        status: 200,
        message: 'success',
        data: {
            total: staffs.length,
            rows: pagin
        }
    }
}
// 删除
export function del(options, arr) {
    const id = getId(options.url)
    let index
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i].id === id.toString()) {
            index = i
            break
        }
    }
    arr.splice(index, 1)
    return {
        status: 200,
        message: 'success'
    }
}

//修改 项目中已使用  可以实现 只不过个别数据需特殊整理 此处需注意

export function update(options, arr) {
    console.log(options, arr)
    // const id = getId(options.url);
    const id = options.key
    let index
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i].key === id) {
            index = i
            break
        }
    }
    arr.splice(index, 1, options)
    return {
        status: 200,
        message: 'success',
        data: arr
    }
}
