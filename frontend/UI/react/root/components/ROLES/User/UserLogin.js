import React, {Component,} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router';
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

import {Link} from 'react-router-dom';
import ajax from '../../../utils/ajax';

class UserLogin extends Component {

    constructor(props) {
        super(props);
        this.email = React.createRef();
        this.password = React.createRef();
    }


    state = {
        email: '',
        password: '',
        err: false,
        loading: false,
        visible: false,
    };


    onSubmit(e, actions) {
        const {email, password} = this.state;

        this.setState({loading: true});
        return ajax.post('/user/login', {email, password, remember: true})
            .then(() => {
                this.props.onLoginSucceed();
            })
            .catch(() => {
                this.setState({
                    loading: false,
                    err: true
                });
            });

    }

    onChange = e => {
        const {name, value} = e.target;
        this.setState({[name]: value});
    };


    render() {
        let loading = this.state.loading;
        let error = this.state.err;
        let msg = (!error) ? 'Login Successful' : 'Wrong Credentials';
        const visibility = error ? 'visible' : 'invisible';

        const splashscreen = <LoaderIn/>;


        const login =
            <div>
                <ZooContext.Consumer>
                    {(state, actions) => (
                        <React.Fragment>
                            <Nav/>
                            <Container className="mt-5 container-customized">
                                <Col sm={{size: 8, order: 2, offset: 4}}>
                                    <h2>Login</h2>
                                    {/*              <div className="panel panel-default">
                                        <div className="panel-body">*/}

                                    <form className="form-horizontal" role="form" method="POST"
                                          onSubmit={(e, actions) => this.onSubmit(e, actions)}>
                                        <div className="form-group">

                                            <label htmlFor="email" className="col-md-4 control-label">E-Mail
                                                Address</label>

                                            <div className="col-md-6">
                                                <input id="email" ref={this.email} type="email" className="form-control"
                                                       name="email" onChange={e => this.onChange(e)} required/>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="password"
                                                   className="col-md-4 control-label">Password</label>

                                            <div className="col-md-6">
                                                <input id="password" ref={this.password} type="password"
                                                       className="form-control" name="password"
                                                       onChange={e => this.onChange(e)} required/>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <div className="col-md-6 col-md-offset-4">
                                                <div className="checkbox">
                                                    <label>
                                                        <input type="checkbox" name="remember"/> Remember Me
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
                                                Email or password does't exist !
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

export default withRouter(UserLogin);

