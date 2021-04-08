import { useDispatch, useSelector } from 'react-redux'

import { Button } from 'antd'
import Constants from '../../redux/constants'
import React from 'react'

interface User {
    lists: string[]
    num: number
    test: string
    lang: string
}
const BasicForm = () => {
    const dispatch = useDispatch()
    const num = useSelector((state: { user: User }) => state.user.num)
    const handleClick = () => {
        console.log(num, 'num')
        dispatch({
            type: Constants.DECREMENT,
            num: 5
        })
    }
    return (
        <div>
            BasicForm num:{num}
            <Button type="primary" onClick={handleClick}>
                Decrement
            </Button>
        </div>
    )
}

export default BasicForm
