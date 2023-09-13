import React from "react";
import { Route, redirect } from 'react-router-dom';


const PrivateRoute = ({ componenet: Component, ...rest}) => {
    return (
        <Route 
            {...rest}
            render={(props) => {
                if (localStorage.getItem('token')) {
                    return <Component {...props} />
                } else {
                    console.log('no token found')
                    return <Redirect to='/login' />
                }
            }}
            />
    )
}


export default PrivateRoute;