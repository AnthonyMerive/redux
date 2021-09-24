import React from 'react'
import {
    HashRouter as Router,
    Switch,
    Route,
    // Redirect,
} from 'react-router-dom';
// import Counter from '../components/Counter';
// import  Login  from '../components/Login';
// import Navbar from '../components/Navbar';
// import Main from '../components/Main'
// import PrivateRoutes from './PrivateRoutes';
import LoginFirebase from '../components/LoginFirebase'
import RegistroFirebase from '../components/RegistroFirebase'

const AppRouter = () => {
    return (
        // <Router>
        //     <div>
        //         <Navbar />
        //         <div className="container">
        //             <Switch>
        //                 <PrivateRoutes exact path="/counter" component={Counter} />
        //                 <Route exact path="/login" component={Login} />
        //                 <Route exact path="/" component={Main}/>
        //                 <Redirect to="/" />

        //             </Switch>
        //         </div>
        //     </div>
        // </Router>

        <Router>
        <Switch>
          <Route exact path="/"  component={LoginFirebase}/>
          <Route exact path="/registro"  component={RegistroFirebase}/>
        </Switch>
    </Router>
    )
}

export default AppRouter