import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {Switch, Route} from 'react-router-dom';

import Home from './components/ROLES/User/Home';
import Login from './components/ROLES/Guest/Login';
import Index from './components/ROLES/Guest/Index';
import Register from './components/ROLES/Guest/Register';
import Forgot from './components/ROLES/Guest/Forgot';
import Reset from './components/ROLES/Guest/Reset';
import AnimalRegistry from './components/AnimalRegistry';
import AdminMain from './components/ROLES/Admin/AdminMain';
import NotFound from './components/PageNotFound/NotFound';

import ajax from "./utils/ajax";
import {withRouter} from "react-router";




class App extends Component {

    state = {
        auth: null,
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
                //return message;
                this.setState({ auth: auth });

            })
            .catch((error)  => {
                console.log(error);
            })
    };


    onUserLoginSucceed = (auth) => {
        this.getAuthVerification().then(() => this.props.history.push("/"));
    };



    render() {
        const {auth} = this.state;

        let routes = null;

            switch(auth) {
                case null:
                    routes =
                        <Switch>
                            <Route exact path='/'
                                   component={ () =>
                                       <Index/>
                                   }
                            />
                            <Route path='/login'
                                   component={ () =><Login/>
                                   }
                            />
                            <Route path='/register'
                                   component={ () =>
                                       <Register onRegisterSuccess={this.onUserLoginSucceed}/>
                                   }
                            />
                            <Route path='/forgotpassword'
                                   component={ () =>
                                       <Forgot onRegisterSuccess={this.onUserLoginSucceed}/>
                                   }
                            />
                            <Route path='/password/reset/:token'
                                   component={ () =>
                                       <Reset onRegisterSuccess={this.onUserLoginSucceed}/>
                                   }
                            />
                            <Route component={ () =>
                                  <NotFound/>
                            }/>
                        </Switch>;
                    break;
                case "user":
                    routes =
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/animals' component={() => <AnimalRegistry isAdmin={false} />}/>
                        <Route component={NotFound}/>
                    </Switch>;
                    break;
                case "admin":
                    routes =
                    <Switch>
                        <Route exact path='/' component={AdminMain} />}/>
                        <Route path='/animals' component={() => <AnimalRegistry isAdmin={true}/> } />
                        <Route component={NotFound}/>
                    </Switch>;
                    break;

            }


        return routes;
    }
}

export default withRouter(App);