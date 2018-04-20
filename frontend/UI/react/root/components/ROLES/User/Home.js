import React, { Component } from 'react';

import { Container } from 'reactstrap';

import Navigation from '../../Navigation';
import LoaderOut from '../../Loader/LoaderOut';

class Home extends Component {

    //loading ? splashscreen : home
    //let {loading} = this.state;
    //loading={loading}
  render() {


      const splashscreen = <LoaderOut/>;

      const home =
      <div>
        <Navigation logoutLink="true" />
        <Container fluid className="container text-center app-title">
            <h1 className="header1-size">Hey, You are logged in !</h1>
        </Container>
      </div>;

      return (
        home
      )
  }
}


export default Home