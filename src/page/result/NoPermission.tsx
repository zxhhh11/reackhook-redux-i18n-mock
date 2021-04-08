import { Button, Result } from 'antd'

import React from 'react'

const NoPermission = (props: any) => {
    const backHome = () => {
        props.history.push('/dashboard')
    }
    return (
        <Result
            status="403"
            title="403"
            subTitle="Sorry, you are not authorized to access this page."
            extra={
                <Button type="primary" onClick={backHome}>
                    Back Home
                </Button>
            }
        />
    )
}

export default NoPermission
