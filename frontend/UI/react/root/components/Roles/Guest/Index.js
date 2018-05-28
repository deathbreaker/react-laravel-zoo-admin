import React from 'react';
import { Container } from "reactstrap";
import Navigation from '../../Common/Navigation';
import Footer from '../../Common/Footer';

const Index = () => (
       <div>
           <Navigation />
           <Container className="text-center app-title">
               <h1 className="header1-size">Basic admin zoo app</h1>
           </Container>
           <Footer/>
       </div>   
);

export default Index