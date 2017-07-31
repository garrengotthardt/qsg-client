import React from 'react'
import UserList from './UserList'

const UsersContainer = (props) => {

    return (
        <div>
          <UserList users={props.users} handleUserSelect={props.handleUserSelect}/>
        </div>
    )
}

export default UsersContainer
