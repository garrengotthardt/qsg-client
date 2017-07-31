import React, { Component } from 'react'
import { Container, Button, Divider, Form } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom'

class AdForm extends Component {
  constructor(props){
    super(props)

    this.state = {
      creator_id: this.props.currentUser.id,
      title: '',
      image_url: '',
      description: '',
      location: '',
      price: '',
      redirect: false

    }

  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state);
    fetch('http://localhost:3000/api/v1/ads', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json',
        // 'Authorization': localStorage.getItem('jwt')
      }
    })
    .then(res => res.json())
    .then(res => console.log(res))
    this.setState({ redirect: true })
  }

  handleChange = (event) => {
    let key = `${event.target.name}`
    let value = `${event.target.value}`
    console.log("key",key)
    console.log("value",value)
    this.setState({
      [key]: value
    })
  }

  render(){
    console.log(this.state)
    return(
      <Container>
        {this.state.redirect? <Redirect to='/ads'/> : null }
        <h1>New Listing</h1>
          <Form size='large' id='signup-form' onSubmit={this.handleSubmit} >
              {/* <Form.Field label='creator_id' control='input' placeholder='Title' value={this.props.currentUser.id}/> */}
              <Form.Field label='Title' control='input' placeholder='Title' name='title' onChange={this.handleChange}/>
              <Form.Field label='Image URL' control='input' placeholder='Image URL' name='image_url' onChange={this.handleChange} />
              <Form.Field label='Description' control='input' placeholder='Description' name='description' onChange={this.handleChange} />
              <Form.Field label='Location' control='input' placeholder='Location' name='location' onChange={this.handleChange} />
              <Form.Input label='Price' type='number' placeholder='price' name='price' onChange={this.handleChange}/>
            <Button type='submit'>Create Listing</Button>
            <Divider hidden />
          </Form>

      </Container>
    )
  }
}
export default AdForm
