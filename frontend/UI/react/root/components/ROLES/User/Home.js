import React, { Component } from 'react';
import { Container } from 'reactstrap';

import Navigation from '../../Navigation';
import LoaderIn from '../../Loader/LoaderIn';

class Home extends Component {

  state = ({
    loading: false
  });

  render() {
      let {loading} = this.state;

      const splashscreen = <LoaderIn/>;

      const home =
      <div>
        <Navigation logoutLink="true" loading={loading} />
        <Container fluid className="container text-center app-title">
            <h1 className="header1-size">Hey, You are logged in !</h1>
        </Container>
      </div>;

      return (
        loading ? splashscreen : home
      )
  }
}


export default Home