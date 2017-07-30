import React from 'react'

const AdDetails = (props) => {

  return(
    <div>
      <h1>{props.ad.title}</h1>
      <img src={props.ad.image_url}/>
      <h3>Price: {props.ad.price}</h3>
      <h3>Location: {props.ad.location}</h3>
      <h3>Description: {props.ad.description}</h3>
      <h3>Seller: {props.ad.creator.name}</h3>

    </div>
  )

}

export default AdDetails
