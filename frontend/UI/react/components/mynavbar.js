import React, { Component } from 'react'
import { NavbarBrand, Navbar, Nav, NavLink, NavItem } from 'reactstrap'
import { withRouter, Link as RRNavLink } from 'react-router-dom'


class Mynavbar extends Component {

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
              <Navbar color="faded" light expand="md">
                  <Nav className="ml-auto" navbar>
                      <NavbarBrand href="#" onClick={this.handleClick.bind(this)}>Basic Authentication</NavbarBrand>
                      <NavItem className="navbar-right">
                          <NavLink href="#" onClick={this.logout.bind(this) }>{this.props.link}</NavLink>
                      </NavItem>
                </Nav>
              </Navbar>
          </div>
        )
    }
    return (
        <div>
            <Navbar color="faded" light expand="md">
                <Nav className="ml-auto" navbar>
                    <NavbarBrand href="#" onClick={this.handleClick.bind(this)}>Basic Authentication</NavbarBrand>
                    <NavItem className="navbar-right">
                        <NavLink to="/login" onClick={this.logout.bind(this) } tag={RRNavLink}>Login</NavLink>
                    </NavItem>
                    <NavItem className="navbar-right">
                        <NavLink to="/register" onClick={this.logout.bind(this) } tag={RRNavLink}>Register</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    )
  }

}



export default withRouter(Mynavbar)