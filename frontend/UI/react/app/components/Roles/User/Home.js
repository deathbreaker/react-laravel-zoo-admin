import React, { Component } from 'react';
import LoaderOut from '../../Loader/LoaderOut';
import { Container } from 'reactstrap';

import Footer from '../../Footer';

const splashscreen = <LoaderOut/>;




class Home extends Component {

    //loading ? splashscreen : home
    //let {loading} = this.state;
    //loading={loading}
  render() {
      return (
          <div>
              <div>
                  <Container fluid className="container text-center app-title">
                      <h1 className="header1-size">Hey, You are logged in !</h1>
                  </Container>
                  <Footer/>
              </div>;

          </div>
      )
  }
}


export default Home