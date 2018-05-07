import React, { Component, } from 'react';
import PropTypes from 'prop-types';

import {ZooContext} from '../../../context/ZooContext';

import {
    Button,
    Container,
    Col,
    UncontrolledAlert,
} from 'reactstrap';

import Nav from '../../Navigation';
import Footer from '../../Footer';
import LoaderIn from '../../Loader/LoaderIn';
import { Link } from 'react-router-dom';
import ajax from '../../../utils/ajax';

class UserLogin extends Component {

    constructor(props){
        super(props);
        this.email = React.createRef();
        this.password = React.createRef();
    }


     state = {
            email : '', password: '',
            err: false,
            loading: false,
            visible: false,
     };


     onSubmit(e, context){
        e.preventDefault();
        const {email, password} = this.state;

        this.setState({loading: true});
        return ajax.post('/user/login', {email: email, password: password})
                    .then( response => {
                        const {success} = response.data;
                        console.log(response);
                        console.log(success);

                        if(success === 'true'){
                            console.log("Before force update.");
                            this.props.history.push("/");
                            this.forceUpdate();
                        }
                        else{
                            this.setState({
                                email : '', password: '',
                                loading: false,
                                err: true
                            });

                            // this.email.value="";
                            // this.password.value="";
                        }

                    })
                    .catch(err => {
                        console.log(err)
                    });

     }


     loginSuccess(context){
         this.props.history.push("/");
     }

     loginFailure(){
         this.setState({
             email : '', password: '',
             loading: false,
             err: true
         });

         this.refs.email.value="";
         this.refs.password.value="";
     }

    handleResponse(response) {
        return new Promise((resolve, reject) => {
            if (response.ok) {
                // return json if it was returned in the response
                const contentType = response.headers.get("content-type");
                if (contentType && contentType.includes("application/json")) {
                    response.json().then(json => resolve(json));
                } else {
                    resolve();
                }
            } else {
                // return error message from response body
                response.text().then(text => reject(text));
            }
        });
    }

    static handleError(error) {
        return Promise.reject(error && error.message);
    }

    onChange= e => {
        const {name, value} = e.target;
        this.setState({[name]: value});
     };



	render() {
        let loading = this.state.loading;
        let error = this.state.err ;
        let msg = (!error) ? 'Login Successful' : 'Wrong Credentials' ;
        const visibility = error ? 'visible' : 'invisible';

        const splashscreen = <LoaderIn/>;



        const login =
            <div>
                <ZooContext.Consumer>
                    {(context) => (
                    <React.Fragment>
                <Nav />
                    <Container className="mt-5 container-customized">
                        <Col sm={{ size: 8, order: 2, offset: 4 }}>
                            <h2>Login</h2>
                  {/*              <div className="panel panel-default">
                                        <div className="panel-body">*/}

                                            <form className="form-horizontal" role="form" method="POST" onSubmit= {(e, context) => this.onSubmit(e)}>
                                                <div className="form-group">

                                                    <label htmlFor="email" className="col-md-4 control-label">E-Mail Address</label>

                                                    <div className="col-md-6">
                                                            <input id="email"  ref={this.email} type="email" className="form-control" name="email"  onChange={e => this.onChange(e)} required />
                                                        </div>
                                                    </div>

                                                    <div className="form-group">
                                                        <label htmlFor="password" className="col-md-4 control-label">Password</label>

                                                        <div className="col-md-6">
                                                            <input id="password"  ref={this.password}  type="password" className="form-control" name="password"  onChange={e => this.onChange(e)}  required />
                                                        </div>
                                                    </div>

                                            <div className="form-group">
                                                <div className="col-md-6 col-md-offset-4">
                                                    <div className="checkbox">
                                                        <label>
                                                            <input type="checkbox" name="remember" /> Remember Me
                                                        </label>
                                                    </div>

                                                </div>
                                            </div>


                                            <div className="form-group">
                                                    <div className="col-md-8 col-md-offset-4">
                                                       {/*button with type submit */}
                                                       {/*<Button color="success">Login</Button>*/}
                                                    <button type="submit" className="btn btn-success">
                                                        Login
                                                    </button>

                                                    <li className="btn btn-link">
                                                        <Link to="forgotpassword">Forgot Your Password?</Link>
                                                    </li>
                                                </div>
                                            </div>
                                            <div className="col-md-offset-2 col-md-8 col-md-offset-2">
                                                <UncontrolledAlert className={visibility} color="danger">
                                                    Email or password does\'t exist !
                                                </UncontrolledAlert>
                                            </div>
                                        </form>
{/*                                    </div>
                                </div>*/}
                        </Col>
                    </Container>
                    <Footer/>
                    </React.Fragment>
         )}
         </ZooContext.Consumer>
         </div>;

	    return loading ? splashscreen : login;

        }
}

export default UserLogin;

