import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from './components/ROLES/User/Home';
import Index from './components/ROLES/Guest/Index';
import UserLogin from './components/ROLES/User/UserLogin';
import Register from './components/ROLES/Guest/Register';
import Forgot from './components/ROLES/Guest/Forgot';
import Reset from './components/ROLES/Guest/Reset';
import AdminLogin from './components/ROLES/Admin/AdminLogin';
import NotFound from './components/PageNotFound/NotFound';

import {homeThemes, loadingContext} from './context/home-context';
import './utils/axios-customized';


class Root extends Component {

    render() {

        let routes = (
            <Switch>
                <Route exact path='/' component={Index}/>
                <Route path='/login' component={UserLogin}/>
                <Route path='/register' component={Register}/>
                <Route path='/home' component={Home}/>
                <Route path='/forgotpassword' component={Forgot}/>
                <Route path='/password/reset/:token' component={Reset}/>
                <Route path='/home' component={Home}/>
                <Route path='/admin' component={AdminLogin}/>

                <Route component={NotFound} />
            </Switch>
        );

        return(
                <Router>
                    {routes}
                </Router>
        )
    }
}

export default Root;






/*
      if (this.props.isAuthenticated) {
            routes = (
                <Switch>
                    <Route exact path='/' component={Index}/>
                    <Route path='/home' component={Home}/>
                </Switch>
            );
       )
*/
