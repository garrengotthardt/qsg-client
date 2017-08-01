import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const AdCard = (props) => {
  console.log("ad card props saved", props.savedAds)
  console.log("ad card props ad", props.ad)
  return (
    <Card centered='true'>
    <Image src={props.ad.image_url} className='card-image' />
     <Card.Content >
       <Card.Header >
         {props.ad.title}
       </Card.Header>
       <Card.Meta onClick={() => props.handleUserSelect(props.ad.creator)}>
         <span className='date'>
           <Link to={`/users/${props.ad.creator_id}`}>

           </Link>
         </span>
       </Card.Meta>
       <Card.Description>
        {props.ad.description}
       </Card.Description>
     </Card.Content>
     <Card.Content extra>
       <a>
         <Link to={`/ads/${props.ad.id}`} ><Icon onClick={() => props.handleInfoSelect(props.ad)} name='info circle' /></Link>
       </a>
       <a>
         <Icon name='comments' />
       </a>

       { props.savedAds ?
         props.savedAds.map(savedAd => savedAd.id).includes(props.ad.id) ?
         <a>
           <Icon name='heart' onClick={() => props.handleUnsaveAd(props.ad.id)}/>
         </a>
       :
       <a>
         <Icon name='empty heart' onClick={() => props.handleSaveAd(props.ad.id)}/>
       </a>
       : null
     }
     </Card.Content>
    </Card>
  )

}

export default AdCard
// <Icon name='user circle' /> {props.ad.creator.first_name} {props.ad.creator.last_name}
