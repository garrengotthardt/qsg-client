import React from 'react'
import AdDetails from './AdDetails'

const AdDetailsContainer = (props) => {
    console.log(props)
    return(
      <div>
      <h1>Ad Details Container</h1>
        <AdDetails ad={props.selectedAd}/>
      </div>
    )
}

export default AdDetailsContainer
