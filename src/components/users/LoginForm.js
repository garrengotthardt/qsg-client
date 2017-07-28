import React, { Component } from 'react'
import { Container, Button, Divider, Form } from 'semantic-ui-react'

const LoginForm = () => (
  <Container>
    <h1>Login</h1>
      <Form size='large' id='signup-form' >
          <Form.Field label='Email' control='input' placeholder='Email address' />
          <Form.Input label='Enter Password' type='password' />
        <Button type='submit'>Submit</Button>
        <Divider hidden />
      </Form>
  </Container>
)
export default LoginForm
