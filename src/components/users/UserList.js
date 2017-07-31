import React from 'react'
import { Image, List, Card, Container } from 'semantic-ui-react'
import UserCard from './UserCard'

const UserList = (props) => (
  <Container>
    <h1>All Users List</h1>
    <Card.Group >
      {props.users.map( user => <UserCard user={user} handleUserSelect={props.handleUserSelect}/>)}
    </Card.Group>
  </Container>
)

export default UserList
