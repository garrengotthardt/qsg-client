import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const AdCard = (props) => {

  console.log(props)


  return (
    <Card>
    <Image src={props.ad.image_url} />
     <Card.Content>
       <Card.Header>
         {props.ad.title}
       </Card.Header>
       <Card.Meta>
         <span className='date'>
           {props.ad.creator_id}
         </span>
       </Card.Meta>
       <Card.Description>
        {props.ad.description}
       </Card.Description>
     </Card.Content>
    </Card>
  )

}

export default AdCard


//  <Card.Content extra>
//    <a>
//      <Icon name='user' />
//      22 Friends
//    </a>
//  </Card.Content>
