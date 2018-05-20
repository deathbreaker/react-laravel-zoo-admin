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
import EditAnimal from './components/EditAnimal';

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
                                   component={ Index}
                            />
                            <Route path='/login'
                                   component={ Login }
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
                                  <NotFound authorized={false}/>
                            }/>
                        </Switch>;
                    break;
                case "user":
                    routes =
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/animals' component={() => <AnimalRegistry isAdmin={false} />}/>
                        <Route component={ () =>
                            <NotFound authorized={true}/>
                        }/>
                    </Switch>;
                    break;
                case "admin":
                    routes =
                    <Switch>
                        { isAdmin && <Route path='/animals/:id/edit' component={EditAnimal} /> }
                        <Route path='/animals/new' component={() => <AnimalRegistry isAdmin={true}/> } />

                        <Route path='/animals' component={() => <AnimalRegistry isAdmin={true}/> } />
                        <Route exact path='/' component={AdminMain} />}/>



                        <Route component={ () =>
                            <NotFound authorized={true}/>
                        }/>
                    </Switch>;
                    break;

            }


        return routes;
    }
}

export default withRouter(App);