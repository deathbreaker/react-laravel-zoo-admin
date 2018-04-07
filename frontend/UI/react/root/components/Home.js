import React, { Component } from 'react'
import { Container } from 'reactstrap'

import Navigation from './Navigation'


class Home extends Component {

  render() {
    return (
         <div> 
            <Navigation logoutLink="true" />
             <Container fluid className="container text-center app-title">
                 <h1 className="header1-size">Hey, You are logged in !</h1>
            </Container>
          </div>
    )
  }
}


export default Home