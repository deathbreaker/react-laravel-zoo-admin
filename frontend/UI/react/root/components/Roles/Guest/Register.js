import React, { Component } from 'react'
import {
    Button,
    Container,
    Row,
    Col,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Input
} from 'reactstrap'
import { Link } from 'react-router-dom'
import ajax from '../../../utils/ajax';
import Navigation from '../../Common/Navigation';
import Footer from '../../Common/Footer';
import {withRouter} from "react-router";
import UserContext from '../../../context/UserContext';


class RegisterReadyForContext extends Component {

    constructor(props){
        super(props);
        this.state = {
            name: '',
            email : '',
            password: '',
            password_confirmation: '',
            age: ''
        }
     }

    onSubmit(e){
        e.preventDefault();
        const {name, email, password, password_confirmation, age} = this.state ;
        ajax.post('/user/register', {
            name,
            email,
            password,
            password_confirmation,
            age
          })
          .then(response=> {
           console.log(response);
           this.setState({err: false});
           this.props.onUserLoginSucceed();
          })
          .catch(err=> {
            console.log(err);
            this.refs.name.value="";
            this.refs.password.value="";
            this.refs.email.value="";
            this.refs.confirm.value="";
            this.refs.age.value="";
            this.setState({err: true});
          });
     }

     onChange(e){
        const {name, value} = e.target ;
        this.setState({[name]: value});
     }

    render() {
        let error = this.state.err;
        let msg = (!error) ? 'Registered Successfully' : 'Oops! , Something went wrong.' ;
        let name = (!error) ? 'alert alert-success' : 'alert alert-danger' ;
        return (   
             <div>
                <Navigation/>
                <Container fluid className="mt-7 container-customized">
                    <Row>
                        <Col sm={{ size: 8, order: 2, offset: 4 }}>
                            <h2>User Register</h2>
                                {/*<div className="panel panel-default">

                                <div className="panel-body">*/}
                                    <div className="col-md-offset-2 col-md-8 col-md-offset-2">
                                        {error && <div className={name} role="alert">{msg}</div>}
                                    </div>
                                    <form className="form-horizontal" role="form" method="POST" onSubmit= {this.onSubmit.bind(this)}>

                                        <div className="form-group">


                                            <Col md={{size: 8, order: 2}}>
                                                <Input placeholder="name"  type="text" className="form-control" ref="name" name="name" onChange={this.onChange.bind(this)} required autoFocus />
                                            </Col>
                                        </div>

                                        <div className="form-group">

                                            <Col md={{size: 8, order: 2}}>
                                                <Input placeholder="age" type="number" className="form-control" ref="age" name="age" onChange={this.onChange.bind(this)} required autoFocus />
                                            </Col>
                                        </div>

                                        <div className="form-group">

                                            <Col md={{size: 8, order: 2}}>
                                                <Input placeholder="email" type="email" className="form-control" ref="email" name="email" onChange={this.onChange.bind(this)} required />
                                            </Col>
                                        </div>

                                        <div className="form-group">

                                            <Col md={{size: 8, order: 2}}>
                                                <Input placeholder="password" type="password" className="form-control"  ref="password" name="password" onChange={this.onChange.bind(this)} required/>
                                            </Col>
                                        </div>

                                        <div className="form-group">

                                            <Col md={{size: 8, order: 2}}>
                                                <Input placeholder="password-confirmation" type="password" className="form-control" ref="confirm" name="password_confirmation" onChange={this.onChange.bind(this)} required/>
                                            </Col>
                                        </div>


                                        <div className="form-group">
                                            <div className="col-md-6 col-md-offset-4">
                                                {/*button with type submit */}
                                                {/*<Button color="success">Register</Button>*/}
                                                <button type="submit" className="btn btn-success">
                                                    Register
                                                </button>
                                            </div>
                                        </div>
                                    </form>
{/*                                </div>
                            </div>*/}
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </div>    
        )
      }
}



class Register extends Component {

    render() {
        return <UserContext.Consumer>
            {(userContext) => <RegisterReadyForContext {...userContext}/>}
        </UserContext.Consumer>
    }
}


export default withRouter(Register);