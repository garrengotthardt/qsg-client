import React from 'react'
import { Container, Image, Item, Button, Label } from 'semantic-ui-react'

const AdDetails = (props) => {

  return(
    <Container>
      <Item.Group>
      <Item>
        <Item.Content>
          <Item.Header as='a'>{props.ad.title}</Item.Header>
          <Item.Description>
            <Image size="large" src={props.ad.image_url} />
            <br/>
            {props.ad.description}
          </Item.Description>
          <br/>
          <Label.Group tag>
            <Label as='a'>${props.ad.price}</Label>
          </Label.Group>
          <Item.Extra>Location: {props.ad.location}</Item.Extra>
          <Item.Extra>Seller: {props.ad.creator.first_name}</Item.Extra>
        </Item.Content>
      </Item>
    </Item.Group>

    <Button color="blue">Contact Seller</Button>
  </Container>

  )
}

export default AdDetails

{/* <Container>
  <h1>{props.ad.title}</h1>
  <img src={props.ad.image_url} className="ad-image"/>
  <h3>Price: ${props.ad.price}</h3>
  <h3>Location: {props.ad.location}</h3>
  <h3>Description: {props.ad.description}</h3>
  <h3>Seller: {props.ad.creator.first_name}</h3>
</Container> */}
