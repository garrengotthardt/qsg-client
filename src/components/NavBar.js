import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

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

          <NavLink to='/' ><Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} /></NavLink>
          <NavLink to='/ads' ><Menu.Item name='all listings' active={activeItem === 'all listings'} onClick={this.handleItemClick} /></NavLink>
          <NavLink to='/ads/new' ><Menu.Item name='create ad' active={activeItem === 'create ad'} onClick={this.handleItemClick} /></NavLink>
          <NavLink to='/users' ><Menu.Item name='all users' active={activeItem === 'all users'} onClick={this.handleItemClick} /></NavLink>
          <NavLink to='/users/profile' ><Menu.Item name='my profile' active={activeItem === 'my profile'} onClick={this.handleItemClick} /></NavLink>

          <Menu.Menu position='right'>
            <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.props.handleLogout} />
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}
