import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {  BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Index from './components/Index'
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
import Forgot from './components/Forgot'
import Reset from './components/Reset'
import './axios-customized'

class Root extends Component {
    render() {

        let routes = (
            <Switch>
                <Route exact path='/' component={Index}/>
                <Route path='/login' component={Login}/>
                <Route path='/register' component={Register}/>
                <Route path='/home' component={Home}/>
                <Route path='/forgotpassword' component={Forgot}/>
                <Route path='/password/reset/:token' component={Reset}/>
            </Switch>
        );


        if (this.props.isAuthenticated) {
            routes = (
                <Switch>
                    <Route exact path='/' component={Index}/>
                    <Route path='/home' component={Home}/>
                </Switch>
            );
        }

        return(
            <Router>
                {routes}
            </Router>
        )
    }
}


export default Root