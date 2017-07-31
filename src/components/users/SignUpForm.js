import React, { Component } from 'react'
import { Container, Button, Divider, Form } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom'

class SignUpForm extends Component {

  constructor (props) {
    super(props)

    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      redirect: false
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    // debugger
    console.log("The sent state is", this.state);
    fetch('http://localhost:3000/api/v1/signup', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json',
        // 'Authorization': localStorage.getItem('jwt')
      }
    })
    .then(res => res.json())
    .then(json => {
      console.log("json resp", json);
      this.props.setCurrentUser(json.user)
    })
    this.setState({ redirect: true })
  }

  handleChange = (event) => {
    // debugger
    let key = `${event.target.name}`
    let value = `${event.target.value}`
    console.log("key",key)
    console.log("value",value)
    this.setState({
      [key]: value
    })
    console.log(this.state);
  }

  render() {
    console.log(this.props.match);
    return (
      <Container>
        {this.state.redirect? <Redirect to="/ads"/> : null }
        <h1>Sign Up</h1>
        <Form size='large' id='signup-form' onSubmit={this.handleSubmit}>
          <Form.Field name="first_name" label='First name' control='input' placeholder='First name' onChange={this.handleChange}/>
          <Form.Field name="last_name" label='Last name' control='input' placeholder='Last name'  onChange={this.handleChange}/>
          <Form.Field name="email" label='Email' control='input' placeholder='Email address'  onChange={this.handleChange}/>
          <Button type='submit'>Submit</Button>
          <Divider hidden />
        </Form>
      </Container>
    )
  }
}
export default SignUpForm

{/* <Form.Input label='Enter Password' type='password' placeholder='Password'/>
<Form.Input label='Confirm Password' type='password confirmation' placeholder='Password confirmation' /> */}
