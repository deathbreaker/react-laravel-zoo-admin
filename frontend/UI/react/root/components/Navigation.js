import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import {
    NavbarBrand,
    Navbar,
    Nav,
    NavLink,
    NavItem } from 'reactstrap'

class Navigation extends Component {

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

    if (this.props.logoutLink) {
      return (
          <div>
              <Navbar color="success" dark expand="md">
                  <NavbarBrand href="#" onClick={this.handleClick.bind(this)}>Zoo app</NavbarBrand>
                  <Nav className="ml-auto" navbar>
                      <NavItem>
                          <NavLink to="/" tag={Link} onClick={this.logout.bind(this) }> Logout </NavLink>
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
                        <NavLink to="/login" tag={Link}>Login</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink  to="/register" tag={Link}>Register</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>

    )
  }

}



export default withRouter(Navigation)