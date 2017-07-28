import React from 'react'
import AdList from './AdList'
import Search from './Search'
import { Container } from 'semantic-ui-react'

export default class AdContainer extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      ads: [],
      currentAds: []
    }
  }

  componentDidMount = () => {
    fetch('http://localhost:3000/api/v1/ads')
    .then(data => data.json())
    .then(ads => this.setState({
      ads,
      currentAds: ads
    }))
  }

  handleSearch = (searchTerm) => {
    let searchResults = this.state.ads.filter( ad => {
      return ad.title.toLowerCase().includes(searchTerm.toLowerCase()) || ad.description.toLowerCase().includes(searchTerm.toLowerCase())
    })
    this.setState({
      currentAds: searchResults
    })
  }



  render () {
    return (
      <div>
        <Container>
          <Search handleSearch={this.handleSearch} />
          <AdList currentAds={this.state.currentAds}/>
        </Container>
      </div>

    )
  }

}
