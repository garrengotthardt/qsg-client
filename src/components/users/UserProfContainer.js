import React from 'react'
import { Container, Header, Divider, Button } from 'semantic-ui-react'
import UserCard from './UserCard'
import AdList from './../ads/AdList'
import { Link } from 'react-router-dom'


export default class UserProfContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      user: {}
    }
  }

  componentDidMount() {
    fetch(`http://localhost:3000/api/v1/users/${window.location.pathname.slice(7)}`)
    .then(data => data.json())
    .then(user => this.setState({user}))
  }


  render () {
    console.log("user profile props", this.props)
    return(
      <Container textAlign='center'>

      <div>
        <h1>{this.state.user.first_name} {this.state.user.last_name}</h1>
        <div className='segment'>
          <UserCard user={this.state.user} handleUserSelect={this.props.handleUserSelect} />
        </div>
        <Divider />
        <div className='segment'>
          <h2>These are {this.state.user.first_name}'s Listings:</h2>
          {this.state.user.ads ? <AdList ads={this.state.user.ads} handleInfoSelect={this.props.handleInfoSelect} handleUserSelect={this.props.handleUserSelect}/> : null}
        </div>

        { this.state.user.id === this.props.currentUser.id ?
        <div className='segment'>
          <h2>Your Saved Listings:</h2>
          {this.state.user.saved_ads ? <AdList savedAds={this.state.user.saved_ads} ads={this.state.user.saved_ads} handleInfoSelect={this.props.handleInfoSelect} handleUserSelect={this.props.handleUserSelect}/> : null}
        </div>
        :null
      }
      </div>

      </Container>
    )
  }
}
