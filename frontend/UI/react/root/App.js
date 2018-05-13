import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {Switch, Route} from 'react-router-dom';


import Home from './components/ROLES/User/Home';
import Index from './components/ROLES/Guest/Index';
import UserLogin from './components/ROLES/User/UserLogin';
import Register from './components/ROLES/Guest/Register';
import Forgot from './components/ROLES/Guest/Forgot';
import Reset from './components/ROLES/Guest/Reset';
import AdminLogin from './components/ROLES/Admin/AdminLogin';
import AnimalRegistry from './components/ROLES/User/AnimalRegistry'
import NotFound from './components/PageNotFound/NotFound';

import ajax from "./utils/ajax";
import {withRouter} from "react-router";




class App extends Component {

    state = {
        auth: false,
    };

    componentDidMount() {
        this.getAuthVerification();
    }

    getAuthVerification = () => {
        return ajax.get("/user/auth")
            .then( response => {
                const {auth} = response.data;
                console.log("Authenticated: " +  auth);
                console.log("Authenticated: ", typeof auth);
                //return message;
                this.setState({ auth: auth });

            })
            .catch((error)  => {
                console.log(error);
            })
    };

    onLoginSucceed = (auth) => {
        this.getAuthVerification().then(() => this.props.history.push("/"));
    };



    render() {
        const {auth} = this.state;
        return auth ?
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/animals' component={AnimalRegistry}/>
            <Route component={NotFound}/>
        </Switch> :
        <Switch>
            <Route exact path='/' component={Index}/>
            <Route path='/user-login' component={() => <UserLogin onLoginSucceed={this.onLoginSucceed}/>}/>
            <Route path='/user-register' component={() => <Register onRegisterSuccess={this.onLoginSucceed}/>}/>
            <Route path='/admin-login' component={() => <AdminLogin onLoginSucceed={this.onLoginSucceed}/>}/>
            <Route path='/forgotpassword' component={Forgot}/>
            <Route path='/password/reset/:token' component={Reset}/>
            <Route component={NotFound}/>
        </Switch>;
    }
}

export default withRouter(App);