import React from 'react'
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import Counter from '../components/Counter';
import  Login  from '../components/Login';
import Navbar from '../components/Navbar';

const AppRouter = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={Counter} />
                        <Route exact path="/login" component={Login} />

                        <Redirect to="/" />

                    </Switch>
                </div>
            </div>
        </Router>
    )
}

export default AppRouter