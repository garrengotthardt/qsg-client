import React from 'react'
import UserInfo from './UserInfo'

export default class UserContainer extends React.Component {
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
        User Container
        <UserInfo currentUser={this.state.currentUser}/>
      </div>

  )
}

}
