const files = require.context('.', true, /\.action.js$/)
const actions = {}

files.keys().forEach((key) => {
    let temp = actions[key.replace(/(\.\/|\.action.js)/g, '')]
    if (!temp) {
        temp = {}
    }

    actions[key.replace(/(\.\/|\.action.js)/g, '')] = Object.assign(temp, files(key))
})
export default actions
