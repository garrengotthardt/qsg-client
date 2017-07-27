import React from 'react'
import Filter from './Filter'
import AdList from './AdList'

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

  render () {
    console.log(this.state.ads)
    return (
      <div>
        
        <AdList currentAds={this.state.currentAds}/>
      </div>

    )
  }

}
