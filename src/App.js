import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import SignUpForm from './components/users/SignUpForm'
import LoginForm from './components/users/LoginForm'
import NavBar from './components/NavBar'
import AdContainer from './components/ads/AdContainer'
import AdForm from './components/ads/AdForm'
import UsersContainer from './components/users/UsersContainer'
import UserDetails from './components/users/UserDetails'
import Auth from './auth'
import AuthAdapter from './authAdapter'
import AdDetailsContainer from './components/ads/AdDetailsContainer'



class App extends Component {

  constructor() {
    super()

    this.state = {
      auth: {
        currentUser: {},
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
          console.log(res);
          localStorage.setItem('email', res.user.email)
          this.setState({
            auth:{
              isLoggedIn: true,
              currentUser: res.user
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
        currentUser: {},
        isLoggedIn:false
      }})
    }

  render() {
    console.log(this.state.auth.currentUser)
    return (
      <Router>
        <div>
          <Route path='/' render={()=> <NavBar user={this.state.auth.currentUser} onLogout={this.handleLogout.bind(this)} /> } />
          <Route path='/login' render={()=> this.state.auth.isLoggedIn ? <Redirect to="/"/> : <LoginForm onLogin={this.onLogin.bind(this)}/> } />
          <Route path="/signup" component={SignUpForm} />
          <Route exact path="/" component={Auth(AdContainer)} />
          <Route exact path="/ads/new" render={()=> <AdForm currentUser={this.state.auth.currentUser}/> } />
          <Route exact path="/users" component={Auth(UsersContainer)} currentUser={this.state.currentUser}/>
          <Route path="/users/:id" component={Auth(UserDetails)} />
          <Route path="/ads/:id" component={AdDetailsContainer} />
        </div>
      </Router>
    );
  }
}

export default App;
