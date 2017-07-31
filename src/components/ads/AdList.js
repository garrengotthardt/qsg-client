import React from 'react'
import { Card } from 'semantic-ui-react'
import AdCard from './AdCard'


const AdList = (props) => {

// console.log(props)

  return (
    <Card.Group>
      {props.currentAds.map( ad => <AdCard ad={ad} handleInfoSelect={props.handleInfoSelect}/>)}
    </Card.Group>
  )

}

export default AdList
