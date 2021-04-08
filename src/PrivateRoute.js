import { Redirect, Route } from 'react-router-dom'

import React from 'react'

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={(props) =>
            localStorage.getItem('auth_user') ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: `${process.env.PUBLIC_URL}/${process.env.REACT_APP_PATH}login`,
                        state: { from: props.location }
                    }}
                />
            )
        }
    />
)
