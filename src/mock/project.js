import Mock from 'mockjs'
import { update } from './util'

// import { array } from 'prop-types';

// const data = [];
// for (let i = 0; i < 16; i += 1) {
//   const d = new Date(new Date().getTime() + i * 9000000);
//   data.push({
//     key: i,
//     name: Mock.Random.name(),
//     id: i + 1,
//     status: ['Approval', 'Pending', 'Reject', 'Create'][Math.floor(Math.random() * 4)],
//     // address: `London Park no. ${i}`,
//     effectiveDate: d,
//     natural: Mock.Random.natural(10000),
//     address: Mock.Random.city(true),
//     email: Mock.Random.email()
//   });
// }
const data = Mock.mock({
    'list|1-60': [
        {
            'key|+1': 1,
            name: '@name()',
            'country|0-3': 3,
            effectiveDate: '@date',
            address: '@county(true)',
            email: '@email',
            natural: Mock.Random.natural(10000),
            'colors|0-5': 0,
            'number|1-16': 1,
            'support|1-2': true,
            'mode|1': [0, 1, 2],
            'priorities|1': [0, 1, 2, 3]
        }
    ]
})
// console.log(data);
export default {
    'get|/project-manage/project/list': () => {
        return {
            message: 'success',
            status: 200,
            data
        }
    },
    'post|/project-manage/project/update': (options) => {
        const option = JSON.parse(options.body)
        const { effectiveDate } = option
        // eslint-disable-next-line prefer-destructuring
        option.effectiveDate = effectiveDate.split('T')[0]
        // option.colors = colors[0];
        const newData = update(option, data.list)
        return {
            status: 200,
            message: 'ok',
            data: newData
        }
    }
}
