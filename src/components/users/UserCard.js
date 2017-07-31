import React from 'react'
import { Card, Icon, Image, Container } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


const UserCard = (props) => {
  return(
        <Card centered='true'>
          <Image src={props.user.image_url} />
          <Card.Content>
              <Card.Header onClick={() => props.handleUserSelect(props.user)}>
                <Link to={`/users/${props.user.id}`} >
                  <Icon name='user circle' />
                  {props.user.first_name} {props.user.last_name}
                </Link>
              </Card.Header>
            <Card.Meta>
              <span className='date'>
                Email: {props.user.email}
              </span>
            </Card.Meta>
          </Card.Content>
        </Card>
  )
}

export default UserCard
