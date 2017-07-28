import React from 'react'
import { Container, Header } from 'semantic-ui-react'
import UserDetails from './UserDetails'
import UserCreatedAdsList from './UserCreatedAdsList'


class UserProfileContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      allAds: [],
      filteredAds: []
    }
  }

  // How to fetch ads filtered by a specific user?

  render(){
    return(
      <Container>
        <UserDetails currentUser={this.props.currentUser} />
        <UserCreatedAdsList createdAds={this.state.createdAds}/>
      </Container>
    )
  }
}

export default UserProfileContainer
