import React, { Component } from 'react';

import image from "./blood.jpg"


 export default class Login extends Component {

  render() {

    return (
      <div className="App">
        <br /><br /><br /><br />

      <img src={image} style={{width:"80%",height:"80%",opacity:0.8}} alt="bloodBank" />

      </div>
    );
  }
}



