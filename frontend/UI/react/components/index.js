import React, { Component } from 'react'
import Mynavbar from './Mynavbar'


class Index extends Component {

  render() {
    return (
       <div> 
          <Mynavbar/>
          <div className="container text-center my-title">
               <h1>Basic admin zoo app</h1>
        </div> 
       </div>   
    )
  }

}

export default Index