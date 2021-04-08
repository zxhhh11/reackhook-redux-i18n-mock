import { useDispatch, useSelector } from 'react-redux'

import { Button } from 'antd'
import Constants from '../../redux/constants'
import React from 'react'

interface User {
    lists: string[]
    num: number
    test: string
    role: string
}

const Analysis = () => {
    const dispatch = useDispatch()
    const num = useSelector((state: { user: User }) => state.user.num)
    const handleClick = () => {
        console.log(num, 'num')
        dispatch({
            type: Constants.INCREMENT,
            num: 3
        })
    }
    return (
        <div>
            Analysis{num}
            <Button type="primary" onClick={handleClick}>
                Increment
            </Button>
        </div>
    )
}

export default Analysis
