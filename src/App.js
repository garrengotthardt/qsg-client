import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import NavBar from './components/NavBar'
import AdContainer from './components/ads/AdContainer'
import UserContainer from './components/users/UserContainer'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <AdContainer />
        <UserContainer />
      </div>
    );
  }
}

export default App;
