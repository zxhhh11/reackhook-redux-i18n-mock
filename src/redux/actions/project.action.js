import { getProjectListApi, updateProjectApi } from '../redux/api/project'

// 获取 dashboard/analysis  Project List 的数据
export function getProjectListAction(data) {
    return (dispatch) => {
        return getProjectListApi(data)
            .then((res) => {
                if (res.data) {
                    dispatch({ type: 'UNAUTHORIZED', lists: [1, 5, 3, 4] })
                }
                return res.data
            })
            .catch((error) => {
                console.log(error)
            })
    }
}
// 修改 dashboard/analysis  Project List 的数据
export function updateProjectAction(option) {
    return (dispatch) => {
        return updateProjectApi(option)
            .then((res) => {
                console.log(res)
                dispatch({ type: 'UNAUTHORIZED', lists: [1, 2, 3, 4] })
                return res
            })
            .catch((error) => {
                console.log(error)
            })
    }
}
