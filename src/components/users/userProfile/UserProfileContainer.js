import React from 'react'
import { Container, Header, Divider, Button } from 'semantic-ui-react'
import UserDetails from './UserDetails'
import UserCreatedAdsList from './UserCreatedAdsList'
import { Link } from 'react-router-dom'


const UserProfileContainer = (props) => {
  const createdAds = props.ads.filter( ad => {
    return ad.creator.email === props.currentUser.email
  })
  // debugger

  return(
    <Container textAlign='center'>
      <h1>Hi, {props.currentUser.first_name}! This is your profile:</h1>
      <div className='segment'>
        <UserDetails currentUser={props.currentUser} />
      </div>
      <Divider />
      <div className='segment'>
        <h2>These are your listings:</h2>
        <UserCreatedAdsList createdAds={createdAds}/>
      </div>
      <div className='segment'>
        <Container textAlign='center'><Link className="LinkButton" to="/ads/new">Add a new listing</Link></Container>
      </div>
    </Container>
  )
}

export default UserProfileContainer
