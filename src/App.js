import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Link, Switch} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import SignUpForm from './components/users/SignUpForm'
import LoginForm from './components/users/LoginForm'
import NavBar from './components/NavBar'
import HomeContainer from './components/HomeContainer'
import AdContainer from './components/ads/AdContainer'
import AdForm from './components/ads/AdForm'
import AdDetailsContainer from './components/ads/AdDetailsContainer'
import UsersContainer from './components/users/UsersContainer'
import UserProfileContainer from './components/users/userProfile/UserProfileContainer'
import Auth from './auth'
import AuthAdapter from './authAdapter'
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
      currentAds: [],
      savedAds: [],
      selectedAd: {}
    }
  }

  isLoggedIn = () => !!window.localStorage.email

  componentDidMount(){
    if (localStorage.getItem('email')) {
      // console.log("hello")
       let email = localStorage.getItem('email')
       fetch('http://localhost:3000/api/v1/users')
       .then(data => data.json())
       .then(users => users.filter(user => user.email === email)[0])
       .then(currentUser => this.setState({
         auth: {
           currentUser: currentUser
         },
         savedAds: currentUser.saved_ads
       })
     )
     }

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
          console.log("do nothing")
        } else {
          // debugger
          localStorage.setItem('email', res.user.email)
          this.setState({
            auth:{
              currentUser: res.user
            }
          })
        }
        //if error render login again
        //else set the jwt token and forward user to /giphs
      })
  }

  handleLogout = () => {
      localStorage.clear()
      this.setState({
        auth: {
          currentUser: {}
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

  handleSaveAd = (event, adId) => {
    console.log("saving")
    console.log(event)
    fetch('http://localhost:3000/api/v1/saver_ads', {
      method: 'POST',
      body: JSON.stringify({ "saver_id": `${this.state.auth.currentUser.id}`, "saved_ad_id": `${adId}` }),
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json',
        // 'Authorization': localStorage.getItem('jwt')
      }
    })
    .then(res => res.json())
    .then(res => console.log(res))
  }

  handleInfoSelect = (ad) => {
    // return function (event) {
      // event.preventDefault()

      this.setState({
        selectedAd: ad
      })

    // }
  }

  render() {
    console.log("saved ads", this.state.savedAds)
    return (
      <Router>
        <div>
          <Route path='/' render={()=> <NavBar user={this.state.auth.currentUser} handleLogout={this.handleLogout} /> } />


          <Route path='/login' render={()=> this.isLoggedIn() ? <Redirect to="/"/> : <LoginForm onLogin={this.onLogin.bind(this)}/> } />

          <Route path="/signup" component={SignUpForm} />

          <Route exact path="/" render={()=> !this.isLoggedIn() ? <Redirect to="/login"/> : <HomeContainer /> } />

          <Route exact path="/ads" render={()=> !this.isLoggedIn() ? <Redirect to="/login"/> : <AdContainer currentAds={this.state.currentAds} handleSearch={this.handleSearch} handleInfoSelect={this.handleInfoSelect} handleSaveAd={this.handleSaveAd}/> } />

          <Switch>

          <Route path="/ads/new" render={()=> !this.isLoggedIn() ? <Redirect to="/login"/> :<AdForm currentUser={this.state.auth.currentUser}/> } />

          <Route exact path="/ads/:id" render={()=> !this.isLoggedIn() ? <Redirect to="/login"/> : <AdDetailsContainer selectedAd={this.state.selectedAd} /> } />

          </Switch>

          <Route exact path="/users" render={()=> !this.isLoggedIn() ? <Redirect to="/login"/> : <UsersContainer currentUser={this.state.auth.currentUser}/> }/>

          <Route path="/users/profile" render={()=> !this.isLoggedIn() ? <Redirect to="/login"/> : <UserProfileContainer currentUser={this.state.auth.currentUser} ads={this.state.ads} handleInfoSelect={this.handleInfoSelect}/>}/>


        </div>
      </Router>
    );
  }
}

export default App


// <Route path="/users/:id" render={()=> !this.state.auth.isLoggedIn ? <Redirect to="/login"/> : <UserProfileContainer currentUser={this.state.auth.currentUser} currentUser={this.state.auth.currentUser}/>}/>
