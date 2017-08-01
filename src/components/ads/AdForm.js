import React, { Component } from 'react'
import { Container, Button, Divider, Form, Dropdown } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom'

const options = [
  { key: 'furniture', text: 'Furniture', value: 'Furniture' },
  { key: 'pets', text: 'Pets', value: 'pets' },
  { key: 'apartments', text: 'Apartments', value: 'apartments' },
  { key: 'cars', text: 'Cars', value: 'cars' },
]

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
      category: '',
      redirect: false,
      ad_id: 0
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    fetch('http://localhost:3000/api/v1/ads', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json',
      }
    }).then(() => this.props.handlePost())
    this.setState({ redirect: true })
  }

  handleChange = (event) => {
    let key = `${event.target.name}`
    let value = `${event.target.value}`
    console.log("event", event)
    console.log("key",key)
    console.log("value",value)
    this.setState({
      [key]: value
    })
  }

  handleDropdownChange = (e, result) => {
    this.setState({category: result.value})
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
              <Form.Input label='Price' type='number' placeholder='Price' name='price' onChange={this.handleChange}/>
              <Form.Dropdown label='Category' placeholder='Category' name='category' fluid search selection options={options} onChange={this.handleDropdownChange} />
            <Button type='submit'>Create Listing</Button>
            <Divider hidden />
          </Form>
      </Container>
    )
  }
}
export default AdForm
