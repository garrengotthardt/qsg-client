import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import SignUpForm from './components/users/SignUpForm'
import LoginForm from './components/users/LoginForm'
import NavBar from './components/NavBar'
import AdContainer from './components/ads/AdContainer'
import UsersContainer from './components/users/UsersContainer'
import UserDetails from './components/users/UserDetails'
import Auth from './auth'
import AuthAdapter from './authAdapter'


class App extends Component {

  constructor() {
    super()

    this.state = {
      auth: {
        email: '',
        isLoggedIn: false
      }
    }
  }
  //
  // handleLogin = (email) => {
  //   this.setState({
  //     auth: {
  //       email: email
  //   })
  //   console.log("Email: ", this.state.email);
  // }

  onLogin(loginParams){
    AuthAdapter.login(loginParams)
      .then( res => {
        //check for an error message
        if( res.error ){
          console.log("do nothing")
        } else {
          localStorage.setItem('email', res.email)
          this.setState({
            auth:{
              isLoggedIn: true,
              email: res.email
            }
          })
        }
        //if error render login again
        //else set the jwt token and forward user to /giphs
      })
  }

  handleLogout(){
      localStorage.clear()
      this.setState({auth: {
        email: '',
        isLoggedIn:false
      }})
    }

  render() {
    return (
      <Router>
        <div>
          <Route path='/' render={()=> <NavBar onLogout={this.handleLogout.bind(this)} /> } />
          <Route path='/login' render={()=> this.state.auth.isLoggedIn ? <Redirect to="/"/> : <LoginForm onLogin={this.onLogin.bind(this)}/> } />
          <Route path="/signup" component={SignUpForm} />
          <Route exact path="/" component={Auth(AdContainer)} />
          <Route exact path="/users" component={Auth(UsersContainer)} />
          <Route path="/users/:id" component={Auth(UserDetails)} />
        </div>
      </Router>
    );
  }
}

export default App;
