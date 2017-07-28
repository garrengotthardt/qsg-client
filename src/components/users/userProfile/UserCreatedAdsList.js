import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import AdCard from '../../ads/AdCard'

const UserCreatedAdsList = (props) => {
  return (
    <Card.Group>
      {this.props.createdAds.map( ad => (
        <AdCard />
      ))}
    </Card.Group>
  )
}

export default UserCreatedAdsList
