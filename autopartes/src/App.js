import React, { Component } from 'react';
import './App.css';
import LoginContainer from './containers/LoginContainer';
import AutopartesContainer from './containers/AutopartesContainer';

class App extends Component {

  constructor(){
    super();
    this.state = {
        estatusError: 99,
        userPass: false,
        usuario: null
    };
} 

  render() {
    console.log("LOG ----><<<<" + this.state.usuario);
    return (
      <div className="App">
      {
        
                <LoginContainer></LoginContainer>

      }
      </div>
    );
  }
}

export default App;
