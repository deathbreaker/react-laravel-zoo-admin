import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


import {ZooContext} from './context/ZooContext';

import Home from './components/ROLES/User/Home';
import Index from './components/ROLES/Guest/Index';
import UserLogin from './components/ROLES/User/UserLogin';
import Register from './components/ROLES/Guest/Register';
import Forgot from './components/ROLES/Guest/Forgot';
import Reset from './components/ROLES/Guest/Reset';
import AdminLogin from './components/ROLES/Admin/AdminLogin';
import AnimalRegistry from './components/ROLES/User/AnimalRegistry'
import NotFound from './components/PageNotFound/NotFound';

import {homeThemes, loadingContext} from './context/home-context';
import ajax from "./utils/ajax";




class Root extends Component {

    state = {
        auth: false,
    };

    componentDidMount(){
        this.getAuthVerification();
    }

    getAuthVerification(){
        ajax.get("/user/auth")
            .then( response => {
                const {message} = response.data;
                console.log("Authenticated: " +  message);
                //return message;
                this.setState({ auth: message });
            })
            .catch((error)  => {
                console.log(error);
            })
    }

    componentDidUpdate(prevProps){

    }

    onLoginSucceed = (auth) => {

        this.setState({auth})

    };



    render() {
        const {auth} = this.state;
        //const history = createBrowserHistory();

        let publicRoutes = (
            <Switch>
                <Route exact path='/' component={Index}/>
                <Route path='/login' component={() => <UserLogin auth={ this.getAuthVerification } onLoginSucceed={ this.onLoginSucceed }/>}/>
                <Route path='/register' component={Register}/>
                <Route path='/forgotpassword' component={Forgot}/>
                <Route path='/password/reset/:token' component={Reset}/>
                <Route component={NotFound} />
            </Switch>
        );

        let privateRoutes = (
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/animals' component={AnimalRegistry}/>
                <Route component={NotFound} />
            </Switch>
        );

        return(
            <ZooContext.Provider value={{
                state: this.state,
                actions: {rerenderPage: () => this.setState({state: this.state})}
            }}>
                <Router>
                        {auth ? publicRoutes : privateRoutes}
                </Router>
            </ZooContext.Provider>
        )
    }
}

export default Root;

//rerenderPage: () => this.setState({state: this.state})
// this.setState({
// rerender: true
// })