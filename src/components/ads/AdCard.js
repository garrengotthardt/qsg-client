import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const AdCard = (props) => {

  console.log(props)


  return (
    <Card >
    <Image src={props.ad.image_url} classname='card-image' />
     <Card.Content>
       <Card.Header>
         {props.ad.title}
       </Card.Header>
       <Card.Meta>
         <span className='date'>
           <Link to={`/users/${props.ad.creator.id}`} user={props.ad.creator}>
             <Icon name='user circle' /> {props.ad.creator.first_name}
           </Link>
         </span>
       </Card.Meta>
       <Card.Description>
        {props.ad.description}
       </Card.Description>
     </Card.Content>
     <Card.Content extra>
       <a>
         <Icon name='info circle' />
       </a>
       <a>
         <Icon name='comments' />
       </a>
       <a>
         <Icon name='empty heart' />
       </a>
     </Card.Content>
    </Card>
  )

}

export default AdCard
