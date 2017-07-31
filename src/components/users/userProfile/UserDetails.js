import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const UserDetails = (props) => {
  return(
    <Card centered='true'>
      <Image src={props.currentUser.image_url} />
      <Card.Content>
        <Card.Header>
          {props.currentUser.first_name} {props.currentUser.last_name}
        </Card.Header>
        <Card.Meta>
          <span className='date'>
            Email: {props.currentUser.email}
          </span>
        </Card.Meta>
      </Card.Content>
    </Card>
  )
}

export default UserDetails
