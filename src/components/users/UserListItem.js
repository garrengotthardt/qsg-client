import React from 'react'
import { Image, List } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const UserListItem = (props) => {
  return (
    <List.Item>
      <List.Content>
        <List.Header>{props.user.first_name} {props.user.last_name}</List.Header>

      </List.Content>
    </List.Item>
  )

}

export default UserListItem
