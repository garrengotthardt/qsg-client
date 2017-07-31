import React from 'react'
import { Container, Header, Divider, Button } from 'semantic-ui-react'
import UserCard from './UserCard'
import UserCreatedAdsList from './userProfile/UserCreatedAdsList'
import { Link } from 'react-router-dom'


const UserProfContainer = (props) => {
  const createdAds = props.ads.filter( ad => {
    return ad.creator.email === props.user.email
  })
  // debugger

  return(
    <Container textAlign='center'>
      <h1>{props.user.first_name} {props.user.last_name}</h1>
      <div className='segment'>
        <UserCard user={props.user} handleUserSelect={props.handleUserSelect}/>
      </div>
      <Divider />
      <div className='segment'>
        <h2>These are {props.user.first_name}'s listings:</h2>
        <UserCreatedAdsList createdAds={createdAds} handleInfoSelect={props.handleInfoSelect} handleUserSelect={props.handleUserSelect}/>
      </div>
    </Container>
  )
}

export default UserProfContainer
