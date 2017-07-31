import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import AdCard from '../../ads/AdCard'

const UserCreatedAdsList = (props) => {

  if (props.createdAds.length > 0) {
    return (
      <Card.Group>
        {props.createdAds.map( ad => (
          <AdCard ad={ad} handleInfoSelect={props.handleInfoSelect}/>
        ))}
      </Card.Group>
    )
  } else {
    return <div>You have currently no listings</div>
  }

}

export default UserCreatedAdsList
