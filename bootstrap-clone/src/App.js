import React, { Component } from 'react';
import './reset.css'
import './App.css';
import Nav from './components/Nav/Nav'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Nav/>
        </div> 
      </div>
    );
  }
}

export default App;
