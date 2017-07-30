import React from 'react'
import AdList from './AdList'
import Search from './Search'
import { Container } from 'semantic-ui-react'
import { BrowserRouter as Redirect} from 'react-router-dom'

export default class AdContainer extends React.Component {
  constructor(props){
    super(props)
  }

  render () {
    console.log(this.props)
    return (
      <div>
        <Container>
          <Search handleSearch={this.props.handleSearch} />
          <AdList currentAds={this.props.currentAds}/>
        </Container>
      </div>

    )
  }

}
