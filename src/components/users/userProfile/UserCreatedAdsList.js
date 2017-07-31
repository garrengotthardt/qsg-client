import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import AdCard from '../../ads/AdCard'

const UserCreatedAdsList = (props) => {
  return (
    <Card.Group>
      {props.createdAds.map( ad => (
        <AdCard ad={ad} handleInfoSelect={props.handleInfoSelect} handleUserSelect={props.handleUserSelect}/>
      ))}
    </Card.Group>
  )
}

export default UserCreatedAdsList
