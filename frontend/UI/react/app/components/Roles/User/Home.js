import React from 'react';
import { Container } from 'reactstrap';
import Footer from '../../Common/Footer';
import Navigation from "../../Common/Navigation";

const Home = () => (
          <div>
              <div>
                  <Navigation />
                  <Container fluid className="container text-center app-title">
                      <h1 className="header1-size">Hey, You are logged in !</h1>
                  </Container>
                  <Footer/>
              </div>;
          </div>

);


export default Home;