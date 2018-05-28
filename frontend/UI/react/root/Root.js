import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './components/Roles/User/Home';
import Login from './components/Roles/Guest/Login';
import Index from './components/Roles/Guest/Index';
import Register from './components/Roles/Guest/Register';
import Forgot from './components/Roles/Guest/_Forgot';
import Reset from './components/Roles/Guest/_Reset';
import List from './components/Animals/List';
import AdminMain from './components/Roles/Admin/AdminMain';
import NotFound from './components/PageNotFound/NotFound';
import Edit from './components/Animals/Edit';
import Create from './components/Animals/Create';
import UserContext from './context/UserContext';
import ajax from "./utils/ajax";
import {withRouter} from "react-router";


class Root extends Component {

    state = {
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

                this.setState({ isAuthorized: auth !== null, isAdmin: auth === "admin" });

            })
            .catch((error)  => {
                console.log(error);
            })
    };

    render() {

        const {isAdmin} = this.state;
        const {isAuthorized} = this.state;

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
        return <UserContext.Provider value={this.state}>
            <Switch>
                {isAdmin && <Route path='/animals/:id/edit' component={ Edit } />}
                {isAdmin && <Route path='/animals/new' component={ Create } />}
                <Route path='/animals' component={() => <List isAdmin={isAdmin}/>} />
                <Route exact path='/' component={isAdmin ? AdminMain : Home} />}/>
                <Route component={NotFound}/>
            </Switch>
        </UserContext.Provider>;
    }
}

export default withRouter(Root);