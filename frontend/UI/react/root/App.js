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
                const {data} = response;
                console.log("Authenticated: " +  data);
                console.log("Authenticated: ", typeof data);
                //return message;
                this.setState({ auth: data });
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
        return auth ? <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/animals' component={AnimalRegistry}/>
            <Route component={NotFound}/>
        </Switch> : <Switch>
            <Route exact path='/' component={Index}/>
            <Route path='/login' component={() => <UserLogin onLoginSucceed={this.onLoginSucceed}/>}/>
            <Route path='/register' component={() => <Register onRegisterSuccess={this.onLoginSucceed}/>}/>
            <Route path='/forgotpassword' component={Forgot}/>
            <Route path='/password/reset/:token' component={Reset}/>
            <Route component={NotFound}/>
        </Switch>;
    }
}

export default withRouter(App);