import React, {Component,} from 'react';
import {withRouter} from 'react-router';
import Navigation from '../../Common/Navigation';
import {
    Button,
    Container,
    Col,
    UncontrolledAlert,
    InputGroup,
    InputGroupAddon,
    Input
} from 'reactstrap';

import UserContext from '../../../context/UserContext';
import Footer from '../../Common/Footer';
import LoaderIn from '../../Loader/LoaderIn';
import ajax from '../../../utils/ajax';

class LoginReadyForContext extends Component {

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


    onSubmit(e) {
        const {email, password} = this.state;

        this.setState({loading: true});
        return ajax.post('/user/login', {email, password, remember: true})
            .then(() => {
                this.props.onUserLoginSucceed();
            })
            .catch((err) => {
                console.log(err);
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
                            <Navigation/>
                            <Container fluid className="mt-7 container-customized">
                                <Col  xs={{ size: 11, order: 2, offset: 4 }} sm={{size: 8, order: 2, offset: 4}}>
                                    <h2>User Login</h2>
                                    {/*              <div className="panel panel-default">
                                        <div className="panel-body">*/}

                                    <form className="form-horizontal" role="form" method="POST"
                                          onSubmit={(e) => this.onSubmit(e)}>
                                        <div className="form-group">
                                            <Col md={{size: 8, order: 2}}>
                                                <InputGroup>
                                                    <InputGroupAddon className={"login-icon"} addonType="prepend">&#64;</InputGroupAddon>
                                                    <Input
                                                           id="email"
                                                           ref={this.email}
                                                           type="email"
                                                           className="form-control"
                                                           name="email"
                                                           onChange={e => this.onChange(e)}
                                                           required
                                                           placeholder="Email .." />
                                                </InputGroup>
                                            </Col>
                                        </div>
                                        <div className="form-group">
                                            <Col md={{size: 8, order: 2}}>
                                                <InputGroup>
                                                    <InputGroupAddon className="login-icon" addonType="prepend">
                                                       &#9919;
                                                    </InputGroupAddon>
                                                    <Input
                                                           id="password"
                                                           type="password"
                                                           ref={this.password}
                                                           placeholder="Password .."
                                                           name="password"
                                                           required
                                                           onChange={e => this.onChange(e)}
                                                    />
                                                </InputGroup>
                                            </Col>
                                        </div>



                                        <div className="form-group">
                                            <div className="col-md-8 col-md-offset-4">
                                                <Button type="submit" color="success">
                                                    Login
                                                </Button>

                                            </div>
                                        </div>
                                        <div className="col-md-offset-2 col-md-8 col-md-offset-2">
                                            <UncontrolledAlert className={visibility} color="danger">
                                                Name or password doesn't exist !
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


class Login extends Component {

    render() {
        return <UserContext.Consumer>
            {(userContext) => <LoginReadyForContext {...userContext}/>}
        </UserContext.Consumer>
    }
}



export default withRouter(Login);

