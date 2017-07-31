import React from 'react'
import { Card } from 'semantic-ui-react'
import AdCard from './AdCard'


const AdList = (props) => {

// console.log(props)

  return (
    <Card.Group centered='true'>
      {props.currentAds.map( ad => <AdCard ad={ad} handleInfoSelect={props.handleInfoSelect} handleUserSelect={props.handleUserSelect}/>)}
    </Card.Group>
  )

}

export default AdList
