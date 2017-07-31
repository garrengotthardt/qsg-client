import React from 'react'
import AdDetails from './AdDetails'

const AdDetailsContainer = (props) => {
    console.log(props)
    return(
      <div>
        <AdDetails ad={props.selectedAd}/>
      </div>
    )
}

export default AdDetailsContainer
