import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import {
    NavbarBrand,
    Navbar,
    Nav,
    NavLink,
    NavItem
} from 'reactstrap';

class Navigation extends Component {

  state = ({
      loading: false
  });

  logout(e){
       e.preventDefault();
       this.setState({loading: true});
       axios.post('api/user/logout')
            .then(response => {
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
        const navigation =
            <div>
                <Navbar color="success" dark expand="md">
                    {/*onClick={this.handleClick.bind(this)}*/}
                    <NavbarBrand to="/home" tag={Link} >Zoo app</NavbarBrand>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink to="/" tag={Link} onClick={this.logout.bind(this) }> Logout </NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>;


        return (
            navigation
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
                        <NavLink to="/register" tag={Link}>Register</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>

    )
  }

}



export default withRouter(Navigation)