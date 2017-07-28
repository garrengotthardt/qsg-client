import React, { Component } from 'react'
import { Container, Button, Divider, Form } from 'semantic-ui-react'

class LoginForm extends Component {

  constructor(props) {
    super(props)

    this.state = {
      email: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      email: event.target.value
    })
  }

  render() {
    return(
      <Container>
        <h1>Login</h1>
        <Form size='large' id='login-form' onSubmit={() => this.props.onLogin(this.state)}>
          <Form.Field onChange={this.handleChange} label='Email' control='input' placeholder='Email address' />
          {/* <Form.Input label='Enter Password' type='password' /> */}
          <Button  type='submit'>Submit</Button>
          <Divider hidden />
        </Form>
      </Container>
    )
  }

}
export default LoginForm
