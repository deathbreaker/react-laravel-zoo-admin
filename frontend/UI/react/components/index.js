import React, { Component } from 'react'
import Nav from './mynavbar'


class Index extends Component {

  render() {
    return (
       <div> 
          <Nav />       
          <div className="container text-center my-title">
               <h1>Laravel + React 	Basic Authenticatin</h1>
        </div> 
       </div>   
    )
  }

}

export default Index