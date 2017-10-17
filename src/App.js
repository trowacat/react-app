import React, { Component } from 'react';
import './App.css';

// Components imports
import Navbar from './Components/Navbar';
import ToggleButton from './Components/ToggleButton';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Navbar />
        <div id="content">
        <ToggleButton />      
        </div>
      </div>
    );
  }
}

export default App;
