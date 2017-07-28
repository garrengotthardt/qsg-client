import React, { Component } from 'react'
import { Container, Button, Divider, Form } from 'semantic-ui-react'

class AdForm extends Component {
  constructor(props){
    super(props)


  }
  render(){
    console.log(this.props)
    return(
      <Container>
        <h1>New Listing</h1>
          <Form size='large' id='signup-form' >
              <Form.Field label='creator_id' control='input' placeholder='Title' value={this.props.currentUser.id}/>
              <Form.Field label='Title' control='input' placeholder='Title' />
              <Form.Field label='Image URL' control='input' placeholder='Image URL' />
              <Form.Field label='Description' control='input' placeholder='Description' />
              <Form.Field label='Location' control='input' placeholder='Location' />
              <Form.Input label='Price' type='number' placeholder='price'/>
            <Button type='submit'>Create Listing</Button>
            <Divider hidden />
          </Form>
      </Container>
    )
  }
}
export default AdForm
