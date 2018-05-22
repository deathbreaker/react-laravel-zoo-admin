import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {Switch, Route} from 'react-router-dom';

import Home from './components/Roles/User/Home';
import Login from './components/Roles/Guest/Login';
import Index from './components/Roles/Guest/Index';
import Register from './components/Roles/Guest/Register';
import Forgot from './components/Roles/Guest/Forgot';
import Reset from './components/Roles/Guest/Reset';
import AnimalRegistry from './components/AnimalRegistry';
import AdminMain from './components/Roles/Admin/AdminMain';
import NotFound from './components/PageNotFound/NotFound';
import EditAnimal from './components/EditAnimal';
import NewAnimal from './components/NewAnimal';
import UserContext from './context/UserContext';
import ajax from "./utils/ajax";
import {withRouter} from "react-router";


class App extends Component {

    state = {
        // auth: {
        //     isAuthorized: null,
        //     isAdmin: null,
        //
        // },
        isAuthorized: null,
        isAdmin: null,
        onUserLoginSucceed: (auth) => {
            this.getAuthVerification().then(() => this.props.history.push("/"))
        }
    };

    componentDidMount() {
        this.getAuthVerification();
    }

    getAuthVerification = () => {
        return ajax.get("/user/auth")
            .then( response => {
                const {auth} = response.data;
                console.log("Authenticated: " +  auth);
                console.log("Authenticated type: ", typeof auth);


                // this.setState({ auth: {isAuthorized: auth !== null, isAdmin: auth === "admin" }});
                this.setState({ isAuthorized: auth !== null, isAdmin: auth === "admin" });

            })
            .catch((error)  => {
                console.log(error);
            })
    };

/*
    onUserLoginSucceed = (auth) => {
        this.getAuthVerification().then(() => this.props.history.push("/"));
    };*/

    render() {
        // const {auth} = this.state;

        const {isAdmin} = this.state;
        const {isAuthorized} = this.state;
        // console.log(auth);
        //
        // console.log("isAuthorized: " + this.state.auth.isAuthorized);
        // console.log("isAdmin: " +  this.state.auth.isAdmin);

        if (!isAuthorized) {
            return <UserContext.Provider value={this.state}>
                <Switch>
                    <Route path='/login' component={Login}/>
                    <Route path='/register' component={Register}/>
                    <Route path='/forgot-password' component={() => <Forgot onRegisterSuccess={this.onUserLoginSucceed}/>}/>
                    <Route path='/password-reset/:token' component={() => <Reset onRegisterSuccess={this.onUserLoginSucceed}/>}/>
                    <Route exact path='/' component={Index}/>
                    <Route component={NotFound}/>
                </Switch>
            </UserContext.Provider>;
        }

        // const {isAdmin} = this.state.auth;

        return <UserContext.Provider value={this.state}>
            <Switch>
                {isAdmin && <Route path='/animals/:id/edit' component={ EditAnimal } />}
                {isAdmin && <Route path='/animals/new' component={ NewAnimal } />}
                <Route path='/animals' component={() => <AnimalRegistry isAdmin={isAdmin}/>} />
                <Route exact path='/' component={isAdmin ? AdminMain : Home} />}/>
                <Route component={NotFound}/>
            </Switch>
        </UserContext.Provider>;
    }
}

export default withRouter(App);