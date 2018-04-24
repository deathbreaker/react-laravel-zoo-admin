import React, { Component } from 'react'
import {
    Button,
    Container,
    Row,
    Col
} from 'reactstrap'
import { Link } from 'react-router-dom'

import Nav from '../../Navigation'
import Footer from '../../Footer';



class Register extends Component {

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
        axios.post('api/user/register', {
            name,
            email,
            password,
            password_confirmation,
            age
          })
          .then(response=> {
           this.setState({err: false});
           this.props.history.push("home") ;
          })
          .catch(error=> {
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
                <Nav />
                <Container fluid className="mt-5 container-customized">
                    <Row>
                        <Col sm={{ size: 8, order: 2, offset: 4 }}>
                            <h2>Register</h2>
                                {/*<div className="panel panel-default">

                                <div className="panel-body">*/}
                                    <div className="col-md-offset-2 col-md-8 col-md-offset-2">
                                        {error && <div className={name} role="alert">{msg}</div>}
                                    </div>
                                    <form className="form-horizontal" role="form" method="POST" onSubmit= {this.onSubmit.bind(this)}>

                                        <div className="form-group">
                                            <label htmlFor="name" className="col-md-4 control-label">Name</label>

                                            <div className="col-md-6">
                                                <input id="name" type="text" className="form-control" ref="name" name="name" onChange={this.onChange.bind(this)} required autoFocus />
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="age" className="col-md-4 control-label">Age</label>

                                            <div className="col-md-6">
                                                <input id="age" type="number" className="form-control" ref="age" name="age" onChange={this.onChange.bind(this)} required autoFocus />
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="email" className="col-md-4 control-label">E-Mail Address</label>

                                            <div className="col-md-6">
                                                <input id="email" type="email" className="form-control" ref="email" name="email" onChange={this.onChange.bind(this)} required />
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="password" className="col-md-4 control-label">Password</label>

                                            <div className="col-md-6">
                                                <input id="password" type="password" className="form-control"  ref="password" name="password" onChange={this.onChange.bind(this)} required/>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="password-confirm" className="without-word-break col-md-5 control-label">Confirm Password</label>

                                            <div className="col-md-6">
                                                <input id="password-confirm" type="password" className="form-control" ref="confirm" name="password_confirmation" onChange={this.onChange.bind(this)} required/>
                                            </div>
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

export default Register;