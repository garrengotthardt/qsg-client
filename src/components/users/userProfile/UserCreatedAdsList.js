import React from 'react'

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
