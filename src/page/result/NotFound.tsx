import { Button, Result } from 'antd'

import React from 'react'

const NotFound = (props: any) => {
    const BackToLogin = () => {
        props.history.push('/login')
    }
    return (
        <div>
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={
                    <Button type="primary" onClick={BackToLogin}>
                        Back To Login Page
                    </Button>
                }
            ></Result>
        </div>
    )
}
export default NotFound
