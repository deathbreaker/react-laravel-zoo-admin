import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';
import {
    NavbarBrand,
    Navbar,
    Nav,
    NavLink,
    NavItem
} from 'reactstrap';
import ajax from '../utils/ajax';


class Navigation extends Component {

    state = ({
        loading: false
    });

    logout = (e) => {
        e.preventDefault();
        this.setState({loading: true});
        console.log(this.props.history)
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

        if (this.props.logoutLink) {
            const navigation =
                <div>
                    <Navbar expand="md" dark fixed="top" className="mb-3 bg-spec-green border-bottom ">
                        {/*onClick={this.handleClick.bind(this)}*/}
                        <NavbarBrand to="/home" tag={Link}>Zoo app</NavbarBrand>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink to="/animals" tag={Link}> Animal Registry </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/" tag={Link} onClick={this.logout}> Logout </NavLink>
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
                <Navbar fixed="top" dark expand="md" className="mb-3 bg-spec-green border-bottom border-white">
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