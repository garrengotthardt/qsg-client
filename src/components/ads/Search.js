import React from 'react'
import { Input, Button, Form, Header } from 'semantic-ui-react'

class Search extends React.Component {

  constructor(props) {
    super(props)

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
    console.log(this.state.searchTerm)
    return (
      <Form>
        <br></br>
        <br></br>
        <Form.Group>
          <Form.Input icon='search' placeholder='Search...' onChange={this.handleChange} type="text" width={14}/>
          <Form.Button size='large' color='blue' type="submit" onClick={() => this.props.handleSearch(this.state.searchTerm)}>Search</Form.Button>
        </Form.Group>
        <Header textAlign='center'>
          <br></br>
            <Button size='huge' color='red' type="submit" onClick={() => this.props.handleSearch('')}>All</Button>
            <Button size='huge' color='teal' type="submit" onClick={() => this.props.handleSearch('Furniture')}>Furniture</Button>
            <Button size='huge' color='pink'type="submit" onClick={() => this.props.handleSearch('Pets')}>Pets</Button>
            <Button size='huge' color='yellow'type="submit" onClick={() => this.props.handleSearch('Cars')}>Cars</Button>
            <Button size='huge' color='green'type="submit" onClick={() => this.props.handleSearch('Apartments')}>Apartments</Button>
        </Header>
          <br></br><br></br><br></br>
      </Form>
    )
  }
}

export default Search
