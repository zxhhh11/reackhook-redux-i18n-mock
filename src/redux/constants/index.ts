import * as common from './common'
import * as list from './list'
import * as sagaTest from './sagatest'
import * as user from './user'

const Constants = { ...list, ...user, ...sagaTest, ...common }
export default Constants
