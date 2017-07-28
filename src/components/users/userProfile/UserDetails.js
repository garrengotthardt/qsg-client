import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const UserDetails = (props) => {
  return(
    <Card>
      <Image src='http://s3.amazonaws.com/cdn.roosterteeth.com/default/original/user_profile_female.jpg' />
      <Card.Content>
        <Card.Header>
          {props.currentUser.first_name} {props.currentUser.last_name}
        </Card.Header>
        <Card.Meta>
          <span className='date'>
            Email: {props.currentUser.email}
          </span>
        </Card.Meta>
        <Card.Description>

        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>

        </a>
      </Card.Content>
    </Card>
  )
}

export default UserDetails
