import React from 'react'
import { Image, List } from 'semantic-ui-react'
import UserListItem from './UserListItem'

const UserList = (props) => (
  <List >
    {props.users.map( user => <UserListItem user={user}/>)}
  </List>
)

export default UserList
