import React, { Component } from 'react';
import {
    Button,
    Container,
    Col,
    UncontrolledAlert,
    Alert
} from 'reactstrap';

import Nav from '../../Navigation';
import Footer from '../../Footer';
import LoaderIn from '../../Loader/LoaderIn';
import { Link } from 'react-router-dom';

class UserLogin extends Component {
    
     constructor(props){
        super(props);
        this.state = {
            email : '',
            password: '',
            loading: false,
            visible: false
        };
     }

     onSubmit(e){
        e.preventDefault();
        const {email , password} = this.state;
        this.setState({loading: true});
        axios.post('api/user/login', {
                email,
                password
             })
             .then(response=> {
                 this.setState({err: false});
                 this.props.history.push("home");

             })
             .catch(error=> {
                 this.setState({loading: false, err: true});
                 this.refs.email.value="";
                 this.refs.password.value="";


             });
     }

     onChange(e){
        const {name, value} = e.target;
        this.setState({[name]: value});
     }

    onDismiss() {
        this.setState({ visible: !this.state.visible });
    }

	render() {
        let loading = this.state.loading;
        let error = this.state.err ;
        let msg = (!error) ? 'Login Successful' : 'Wrong Credentials' ;
        const visibility = error ? 'visible' : 'invisible';

        let name = (!error) ? 'alert alert-success' : 'alert alert-danger';

        const splashscreen = <LoaderIn/>;

        const login =
            <div>
                <Nav />
                    <Container className="mt-5 container-customized">
                        <Col sm={{ size: 8, order: 2, offset: 4 }}>
                            <h2>Login</h2>
                  {/*              <div className="panel panel-default">
                                        <div className="panel-body">*/}

                                            <form className="form-horizontal" role="form" method="POST" onSubmit= {this.onSubmit.bind(this)}>
                                                <div className="form-group">

                                                    <label htmlFor="email" className="col-md-4 control-label">E-Mail Address</label>

                                                    <div className="col-md-6">
                                                            <input id="email" type="email" ref="email" className="form-control" name="email"  onChange={this.onChange.bind(this)} required />
                                                        </div>
                                                    </div>

                                                    <div className="form-group">
                                                        <label htmlFor="password" className="col-md-4 control-label">Password</label>

                                                        <div className="col-md-6">
                                                            <input id="password" type="password" ref="password" className="form-control" name="password"  onChange={this.onChange.bind(this)}  required />
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
                                                    Wrong credentials !
                                                </UncontrolledAlert>
                                            </div>
                                        </form>
{/*                                    </div>
                                </div>*/}
                        </Col>
                    </Container>
                    <Footer/>
         </div>;

	    return loading ? splashscreen : login;

        }
}

export default UserLogin;

