import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'
class AdCardActions extends Component {
  constructor(props) {
    super(props)

    this.state = {
      saved: false
    }

  }

componentWillMount() {
  this.props.savedAds ?
    this.props.savedAds.map(savedAd => savedAd.id).includes(this.props.ad.id) ?
      this.setState({saved: true})
    : null
  : null
}

handleSaveClick = () => {
this.props.handleSaveAd(this.props.ad.id)
this.setState({ saved: !this.state.saved })
}

handleUnsaveClick = (event) => {
 this.props.handleUnsaveAd(this.props.ad.id)
 this.setState({ saved: !this.state.saved })
}

render(){
  console.log("ad is saved?", this.state.saved)
  return(
    <div>
    <a>
      <Link to={`/ads/${this.props.ad.id}`} ><Icon onClick={() => this.props.handleInfoSelect(this.props.ad)} name='info circle' /></Link>
    </a>


    <a>
      <Icon name='comments' />
    </a>

    { this.state.saved ?
      <a>
        <Icon name='heart' onClick={this.handleUnsaveClick}/>
      </a>
    :
      <a>
        <Icon name='empty heart' onClick={this.handleSaveClick}/>
      </a>
    }
  </div>
  )
}
}

export default AdCardActions
