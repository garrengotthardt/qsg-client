import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {

  constructor(props) {
    super(props)

    this.state = { activeItem: 'all listings' }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing secondary>


          {/* <Link to='/' ><Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} /></Link> */}
          <Link to='/ads' ><Menu.Item name='all listings' active={activeItem === 'all listings'} onClick={this.handleItemClick} /></Link>
          <Link to='/ads/new' ><Menu.Item name='create ad' active={activeItem === 'create ad'} onClick={this.handleItemClick} /></Link>
          <Link to='/users' ><Menu.Item name='all users' active={activeItem === 'all users'} onClick={this.handleItemClick} /></Link>
          <Link to={`/users/${this.props.user.id}`} ><Menu.Item name='my profile' active={activeItem === 'my profile'} onClick={this.handleItemClick} /></Link>

          <Menu.Menu position='right'>
            {this.props.isLoggedIn() ? <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.props.handleLogout} />
            : null}
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}
