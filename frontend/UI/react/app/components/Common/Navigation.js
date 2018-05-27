import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';
import {
    Navbar,
    NavLink,
    NavItem,
    NavbarBrand,
    Nav,
} from 'reactstrap';
import PropTypes from "prop-types";

import UserContext from '../../context/UserContext'
import ajax from '../../utils/ajax';

class NavigationReadyForContext extends Component {

    static contextTypes = {
        router: PropTypes.object
    };

    constructor(props, context) {
        super(props, context);

        this.state = ({
            loading: false
        });
    }





    logout = (e) => {
        e.preventDefault();
        this.setState({loading: true});
        ajax.post('/user/logout')
            .then(response => {
                this.context.router.history.push("/");
                window.location.reload(true);
            })
            .catch(error => {
                console.log(error);
            });
    };


    render() {
        return this.props.isAuthorized ? <div>
            <Navbar expand="md" dark fixed="top" className="mb-3 bg-spec-green border-bottom ">
                <NavbarBrand to="/" tag={Link}>Zoo app</NavbarBrand>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink to="/animals" tag={Link}> List all animals</NavLink>
                    </NavItem>
                    {this.props.isAdmin && <NavItem>
                        <NavLink to="/animals/new" tag={Link}> Create new animal </NavLink>
                    </NavItem>}
                    <NavItem>
                        <NavLink to="/" tag={Link} onClick={this.logout}> Logout </NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div> : <div>
            <Navbar fixed="top" dark expand="md" className="mb-3 bg-spec-green border-bottom border-white">
                <NavbarBrand to="/" tag={Link} >Zoo app</NavbarBrand>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink to="/login" tag={Link}>User Login</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/register" tag={Link}>User Register</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    }
}

class Navigation extends Component {

    render() {
        return <UserContext.Consumer>
            {(userContext) => <NavigationReadyForContext {...userContext}/>}
        </UserContext.Consumer>
    }
}


export default withRouter(Navigation);
