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


const PrivateRoutes = ({component:Task, ...rest}) => {
    return (

    <Route {...rest}>
        {auth? 
           <Task/> 
        :
        <Redirect to="/login" />
        }
    </Route>
            
    )
}



export default PrivateRoutes
