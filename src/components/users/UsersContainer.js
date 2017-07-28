import React from 'react'
import UserList from './UserList'

export default class UsersContainer extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      users: [],
      currentUser: {}
    }
  }

  componentDidMount = () => {
    fetch('http://localhost:3000/api/v1/users')
    .then(data => data.json())
    .then(users => this.setState({users}))
  }

  render(){
    return (
        <div>
          <UserList users={this.state.users}/>
        </div>

    )
  }

}
