import React from 'react'
import { Redirect, Route } from 'react-router'

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

let auth;
auth=true;


const PrivateRoutes = ({component:Counter, ...rest}) => {
    return (

    <Route {...rest}>
        {auth? 
           <Counter/> 
        :
        <Redirect to="/login" />
        }
    </Route>
            
    )
}



export default PrivateRoutes
