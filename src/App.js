import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Link, Switch} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import SignUpForm from './components/users/SignUpForm'
import LoginForm from './components/users/LoginForm'
import NavBar from './components/NavBar'
import AdContainer from './components/ads/AdContainer'
import AdForm from './components/ads/AdForm'
import AdDetailsContainer from './components/ads/AdDetailsContainer'
import UsersContainer from './components/users/UsersContainer'
import UserProfileContainer from './components/users/userProfile/UserProfileContainer'
import Auth from './auth'
import AuthAdapter from './authAdapter'
import UserCard from './components/users/UserCard'
import UserProfContainer from './components/users/UserProfContainer'


// import AppContainer from './components/AppContainer'


class App extends Component {

  constructor() {
    super()

    this.state = {
      auth: {
        currentUser: {},
        // isLoggedIn: false
      },
      ads: [],
      users: [],
      currentAds: [],
      selectedAd: {},
      selectedUser: {}
    }
  }

  isLoggedIn = () => window.localStorage.email

  componentDidMount(){
    if (localStorage.getItem('email')) {
      // console.log("hello")
       let email = localStorage.getItem('email')
       fetch('http://localhost:3000/api/v1/users')
       .then(data => data.json())
       .then(users => users.filter(user => user.email === email))
       .then(currentUser => this.setState({
         auth: {
           currentUser: currentUser[0]
         }
       })
     )
     }

     fetch('http://localhost:3000/api/v1/users')
     .then(data => data.json())
     .then(users => this.setState({users}))

    fetch('http://localhost:3000/api/v1/ads')
    .then(data => data.json())
    .then(ads => this.setState({
      ads,
      currentAds: ads
    }))
  }

  // handleLogin = (email) => {
  //   this.setState({
  //     auth: {
  //       email: email
  //   })
  //   // console.log("Email: ", this.state.email);
  // }

  onLogin(loginParams){
    AuthAdapter.login(loginParams)
      .then( res => {
        //check for an error message
        if( res.error ){
          // console.log("do nothing")
        } else {
          // debugger
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
      this.setState({
        auth: {
          currentUser: {},
          isLoggedIn:false
      }})
    }


  handleSearch = (searchTerm) => {
    let searchResults = this.state.ads.filter( ad => {
      return ad.title.toLowerCase().includes(searchTerm.toLowerCase()) || ad.description.toLowerCase().includes(searchTerm.toLowerCase())
    })
    this.setState({
      currentAds: searchResults
    })
  }

  handleInfoSelect = (ad) => {
      this.setState({
        selectedAd: ad
      })
  }

  handleUserSelect = (user) => {
      this.setState({
        selectedUser: user
      })
  }



  render() {

    return (
      <Router>
        <div>
          <Route path='/' render={()=> <NavBar user={this.state.auth.currentUser} onLogout={this.handleLogout.bind(this)} /> } />

          <Route path='/login' render={()=> this.isLoggedIn ? <Redirect to="/"/> : <LoginForm onLogin={this.onLogin.bind(this)}/> } />

          <Route path="/signup" component={SignUpForm} />

          <Route exact path="/ads" render={()=> !this.isLoggedIn ? <Redirect to="/login"/> : <AdContainer ads={this.state.currentAds} handleSearch={this.handleSearch} handleInfoSelect={this.handleInfoSelect} handleUserSelect={this.handleUserSelect} /> } />


          <Switch>

          <Route path="/ads/new" render={()=> <AdForm currentUser={this.state.auth.currentUser}/> } />

          <Route exact path="/ads/:id" render={()=> !this.isLoggedIn ? <Redirect to="/login"/> : <AdDetailsContainer selectedAd={this.state.selectedAd} /> } />

          <Route exact path="/users" render={()=> !this.isLoggedIn ? <Redirect to="/login"/> : <UsersContainer handleInfoSelect={this.handleInfoSelect} handleUserSelect={this.handleUserSelect} users={this.state.users}/> }/>

          <Route path="/users/profile" render={()=> !this.isLoggedIn ? <Redirect to="/login"/> : <UserProfileContainer currentUser={this.state.auth.currentUser} ads={this.state.ads} handleInfoSelect={this.handleInfoSelect}/>}/>

          <Route exact path="/users/:id" render={()=> !this.isLoggedIn ? <Redirect to="/login"/> : <UserProfContainer user={this.state.selectedUser} handleUserSelect={this.handleUserSelect} handleInfoSelect={this.handleInfoSelect}/>} />

          </Switch>



        </div>
      </Router>
    );
  }
}

export default App


// <Route path="/users/:id" render={()=> !this.state.auth.isLoggedIn ? <Redirect to="/login"/> : <UserProfileContainer currentUser={this.state.auth.currentUser} currentUser={this.state.auth.currentUser}/>}/>
