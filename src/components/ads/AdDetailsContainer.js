import React from 'react'
import AdDetails from './AdDetails'

export default class AdDetailsContainer extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      // ads: [],
      currentAd: {}
    }

  }
  //
  // componentDidMount = () => {
  //   fetch('http://localhost:3000/api/v1/ads')
  //   .then(data => data.json())
  //   .then(ads => this.setState({ads}))
  //
  //
  // }

  render() {
    return(
      <div>
        This is the Ad Details Container
        {/* <AdDetails ad={this.state.currentAd}/> */}
      </div>
    )
  }
}
