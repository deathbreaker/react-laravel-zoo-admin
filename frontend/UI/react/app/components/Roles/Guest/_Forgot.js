// import React, { Component } from 'react'
// import {
// 	Container,
// 	Row
//
// } from 'reactstrap'
//
// import ajax from '../../../utils/ajax';
// import Navigation from '../../Common/Navigation';
//
//
// class Forgot extends Component{
//
//
// 	constructor(props){
// 		super(props);
// 		this.state =  {
// 			email : '',
// 		}
// 	}
//
// 	onSubmit(e){
// 		e.preventDefault();
// 		const {email} = this.state;
//         ajax.post('api/password/email', {
//              email,
//           })
//           .then(response=> {
//           	this.refs.email.value="";
//             this.setState({err: false});
//           })
//           .catch(error=> {
//             this.setState({err: true});
//             this.refs.email.value="";
//           });
//      }
//
//
// 	onChange(e){
// 		const email = e.target.value;
// 		this.setState({email : email});
// 	}
//
// 	render(){
//
// 		let error = this.state.err ;
//         let msg = (!error) ? 'We have e-mailed your password reset link!' : 'User doesnt exist' ;
//         let name = (!error) ? 'alert alert-success' : 'alert alert-danger' ;
// 		return(
// 			<div>
// 				<Navigation />
// 				<Container>
// 				    <Row>
// 				        <div className="col-md-8 col-md-offset-2">
// 				            <div className="panel panel-default">
// 				                <div className="card-header">Reset Password</div>
// 				                <div className="panel-body">
// 				                	<div className="col-md-offset-2 col-md-8 col-md-offset-2">
//                                         {error !== undefined && <div className={name} role="alert">{msg}</div>}
//                                     </div>
// 				                    <form className="form-horizontal" role="form" method="POST" onSubmit={this.onSubmit.bind(this)}>
// 				                        <div className="form-group">
// 				                            <label htmlFor="email" className="col-md-4 control-label">E-Mail Address</label>
//
// 				                            <div className="col-md-6">
// 				                                <input id="email" type="email" ref= "email" className="form-control" name="email"  onChange={this.onChange.bind(this)} required />
// 				                            </div>
// 				                        </div>
//
// 				                        <div className="form-group">
// 				                            <div className="col-md-6 col-md-offset-4">
// 				                                <button type="submit" className="btn btn-success">
// 				                                    Send Password Reset Link
// 				                                </button>
// 				                            </div>
// 				                        </div>
// 				                    </form>
// 				                </div>
// 				            </div>
// 				        </div>
// 					</Row>
// 				</Container>
// 			</div>
//
// 			)
// 		}
// }
//
// export default Forgot