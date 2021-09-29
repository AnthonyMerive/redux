import React, { useState, useEffect } from 'react'
import {
    HashRouter as Router,
    Switch,
    // Route,
    // Redirect,
} from 'react-router-dom';
// import Counter from '../components/Counter';
// import  Login  from '../components/Login';
// import Navbar from '../components/Navbar';
// import Main from '../components/Main'
import { PrivateRoutes } from './PrivateRoutes';
import LoginFirebase from '../components/LoginFirebase'
import RegistroFirebase from '../components/RegistroFirebase'
import { DashboardRouter } from './DashboardRouter';
import { PublicRoute } from './PublicRoute';
import { useDispatch } from 'react-redux';
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import { loginEmailPassword } from '../actions/actionLogin'
// import Estudiantes from '../components/Estudiantes'

const AppRouter = () => {

    const dispatch = useDispatch();

    const [checking, setChecking] = useState(true)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const auth = getAuth()

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user?.uid) {
                dispatch(loginEmailPassword(user.uid, user.displayName))
                setIsLoggedIn(true)
            } else {
                setIsLoggedIn(false)
            }
            setChecking(false)
        })
    }, [dispatch, setChecking, setIsLoggedIn, auth])

    if (checking) {
        return (
            <h2>Cargando...</h2>
        )
    }

    return (
        <Router>
            <div>
                {/* <Navbar /> */}
                <div className="container mt-5">
                    <Switch>
                        {/* <PrivateRoutes exact path="/estudiantes" component={Estudiantes} /> */}
                        <PublicRoute
                            exact path="/login"
                            component={LoginFirebase}
                            isAuthenticated={isLoggedIn}
                        />

                        <PublicRoute
                            exact path="/register"
                            component={RegistroFirebase}
                            isAuthenticated={isLoggedIn}
                        />
                        {/* <Route path="/" component={DashboardRouter} /> */}

                        <PrivateRoutes
                            path="/"
                            component={DashboardRouter}
                            isAuthenticated={isLoggedIn}
                        />

                        {/* <Redirect to="/login" /> */}

                    </Switch>
                </div>
            </div>
        </Router>

        //     <Router>
        //     <Switch>
        //       <Route exact path="/"  component={LoginFirebase}/>
        //       <Route exact path="/registro"  component={RegistroFirebase}/>
        //     </Switch>
        // </Router>
    )
}

export default AppRouter