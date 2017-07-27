import React from 'react'
import { Input, Button, Form } from 'semantic-ui-react'

class Search extends React.Component {

  constructor() {
    super()

    this.state = {
      searchTerm: ''
    }
  }

  handleChange = (event) => {
    let term = event.target.value
    this.setState({
      searchTerm: term
    })
  }


  render() {
    return (
      <Form>
        <br></br>
        <br></br>
        <Form.Field>
          <input placeholder='' onChange={this.handleChange} type="text"/>
        </Form.Field>
          <Button type="submit" onClick={() => this.props.handleSearch(this.state.searchTerm)}>Search</Button>
          <br></br>
          <br></br>
      </Form>
    )
  }
}

export default Search
