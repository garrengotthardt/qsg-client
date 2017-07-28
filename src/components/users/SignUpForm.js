import React, { Component } from 'react'
import { Container, Button, Divider, Form } from 'semantic-ui-react'

const SignUpForm = () => (
  <Container>
    <h1>Sign Up</h1>
      <Form size='large' id='signup-form' >
          <Form.Field label='First name' control='input' placeholder='First name' />
          <Form.Field label='Last name' control='input' placeholder='Last name' />
          <Form.Field label='Email' control='input' placeholder='Email address' />
          <Form.Input label='Enter Password' type='password' placeholder='Password'/>
          <Form.Input label='Confirm Password' type='password confirmation' placeholder='Password confirmation' />
        <Button type='submit'>Submit</Button>
        <Divider hidden />
      </Form>
  </Container>
)
export default SignUpForm
