import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {

  constructor(props) {
    super(props)

    this.state = { activeItem: 'home' }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing secondary>
          Hello {this.props.user.first_name}
          <Link to='/' ><Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} /></Link>
          <Link to='/ads' ><Menu.Item name='all listings' active={activeItem === 'all listings'} onClick={this.handleItemClick} /></Link>
          <Link to='/ads/new' ><Menu.Item name='create ad' active={activeItem === 'create ad'} onClick={this.handleItemClick} /></Link>
          <Link to='/users' ><Menu.Item name='all users' active={activeItem === 'all users'} onClick={this.handleItemClick} /></Link>

          <Menu.Item name='saved listings' active={activeItem === 'friends'} onClick={this.handleItemClick} />
          <Menu.Item name='my profile' active={activeItem === 'messages'} onClick={this.handleItemClick} />
          <Menu.Menu position='right'>
            <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.props.onLogout} />
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}
