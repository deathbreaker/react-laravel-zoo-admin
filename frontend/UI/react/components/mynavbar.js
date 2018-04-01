import React, { Component } from 'react'
import { withRouter, NavLink as RRNavLink } from 'react-router-dom'
import {
    NavbarBrand,
    Navbar,
    Nav,
    NavLink,
    NavItem } from 'reactstrap'

class MyNavbar extends Component {

  constructor(props){
      super(props);
  } 
  
  logout(e){
       e.preventDefault();  
       axios.post('api/logout')
          .then(response=> {
            this.props.history.push('/');
          })
          .catch(error=> {
            console.log(error);
          });
  }
  
  handleClick(e){

    e.preventDefault();
    this.props.history.push('/');

  }
  render() {

    if (this.props.link) {
      return (
          <div>
              <Navbar color="success" success expand="md">
                  <NavbarBrand href="#" onClick={this.handleClick.bind(this)}>Zoo app</NavbarBrand>
                  <Nav className="ml-auto" navbar>
                      <NavItem>
                          <NavLink href="#" onClick={this.logout.bind(this) }>{this.props.link}</NavLink>
                      </NavItem>
                </Nav>
              </Navbar>
          </div>
        )
    }
    return (
        <div>
            <Navbar color="success" dark expand="md">
                <NavbarBrand href="#" onClick={this.handleClick.bind(this)}>Zoo app</NavbarBrand>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink to="/login" onClick={this.logout.bind(this) } tag={RRNavLink}>Login</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/register" onClick={this.logout.bind(this) } tag={RRNavLink}>Register</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    )
  }

}



export default withRouter(MyNavbar)