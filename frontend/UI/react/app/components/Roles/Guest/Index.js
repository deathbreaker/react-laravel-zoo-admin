import React, { Component } from 'react';
import { Container } from "reactstrap";
import Navigation from '../../Navigation';
import Footer from '../../Footer';

class Index extends Component {

  render() {
    return (
       <div>
           <Navigation />
           <Container className="text-center app-title">
               <h1 className="header1-size">Basic admin zoo appaaaaa</h1>
           </Container>
           <Footer/>
       </div>   
    )
  }

}

export default Index