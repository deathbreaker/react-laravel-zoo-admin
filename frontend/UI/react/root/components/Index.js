import React, { Component } from 'react'
import { Container } from "reactstrap"
import Mynavbar from './Navigation'


class Index extends Component {

  render() {
    return (
       <div>
           <Mynavbar/>
           <Container className="text-center app-title">
               <h1 className="header1-size">Basic admin zoo app</h1>
           </Container>
       </div>   
    )
  }

}

export default Index