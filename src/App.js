import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import NavBar from './components/NavBar'
import AdContainer from './components/ads/AdContainer'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <AdContainer />
      </div>
    );
  }
}

export default App;
