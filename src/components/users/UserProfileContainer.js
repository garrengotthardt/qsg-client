import React from 'react'
import UserDetails from './UserDetails'

class UserProfileContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render(){
    return(
      <UserDetails user={this.props.currentUser}/>
    )
  }
}

export default UserProfileContainer
