import React from 'react'
import { Image, List } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const UserListItem = (props) => {
  return (
    <List.Item>
      <List.Content>
        <List.Header><Link to={`/users/${props.user.id}`}>{props.user.first_name} {props.user.last_name}</Link></List.Header>
        Top Contributor
      </List.Content>
    </List.Item>
  )

}

export default UserListItem
