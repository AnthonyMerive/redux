import React from 'react'
import { Redirect, Route } from 'react-router'
import PropTypes from 'prop-types'

//  const PrivateRoutes = (props) => {
//     return (

//     <Route exact={props.exact} path={props.path} component={props.component} />

//     )
// }

// const PrivateRoutes = (props) => {
//     return (

//     <Route {...props} />

//     )
// }

// let auth;
// auth=true;


// const PrivateRoutes = ({component:Estudiantes, ...rest}) => {
//     return (

//     <Route {...rest}>
//         {auth? 
//            <Estudiantes/> 
//         :
//         <Redirect to="/login" />
//         }
//     </Route>

//     )
// }

//export default PrivateRoutes
//----anterior forma jhon mircha

export const PrivateRoutes = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {
    return (

        <Route {...rest}
            component={(props) => (
                (isAuthenticated)
                    ?
                    (<Component {...props} />)
                    :
                    (<Redirect to="/login" />)
            )} />
    )
}

PrivateRoutes.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}




