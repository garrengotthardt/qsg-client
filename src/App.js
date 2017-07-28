import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import SignUpForm from './components/users/SignUpForm'
import LoginForm from './components/users/LoginForm'
import NavBar from './components/NavBar'
import AdContainer from './components/ads/AdContainer'
import UserContainer from './components/users/UserContainer'


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={NavBar} />
          <Route exact path="/" component={AdContainer} />
          <Route path="/login" component={LoginForm} />
          <Route path="/signup" component={SignUpForm} />
          {/* <Route path="/users" component={UsersContainer} /> */}
          {/* <Route path="/users/:id" component={UserContainer} /> */}
        </div>
      </Router>
    );
  }
}

export default App;
