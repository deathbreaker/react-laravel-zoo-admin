import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';
import {
    Navbar,
    NavLink,
    NavItem,
    UncontrolledDropdown,
    NavbarBrand,
    Nav,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

import ajax from '../utils/ajax';

class Navigation extends Component {


    state = ({
        loading: false
    });

    logout = (e) => {
        e.preventDefault();
        this.setState({loading: true});
        console.log(this.props.history);
        ajax.post('/user/logout')
            .then(response => {
                this.props.history.push('/');
                window.location.reload(true);
            })
            .catch(error => {
                console.log(error);
            });
    };

    handleClick(e) {
        e.preventDefault();
        this.props.history.push('/');
    }

    render() {

        let navigation = null;

        this.props.logoutLink ?
            navigation =
            <div>
                <Navbar expand="md" dark fixed="top" className="mb-3 bg-spec-green border-bottom ">
                    <NavbarBrand to="/" tag={Link}>Zoo app</NavbarBrand>
                    <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink to="/animals" tag={Link}> List all animals</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="/animals/new" tag={Link}> Create new animal </NavLink>
                                </NavItem>
                        <NavItem>
                            <NavLink to="/" tag={Link} onClick={this.logout}> Logout </NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>:
            navigation =
            <div>
                <Navbar fixed="top" dark expand="md" className="mb-3 bg-spec-green border-bottom border-white">
                     <NavbarBrand to="/" tag={Link} onClick={this.handleClick.bind(this)}>Zoo app</NavbarBrand>
                     <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink to="/login" tag={Link}>User Login</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/register" tag={Link}>User Register</NavLink>
                        </NavItem>
                        </Nav>
                </Navbar>
            </div>;

        return navigation;
    }

}


export default withRouter(Navigation);
