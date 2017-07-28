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
          <Link to='/' ><Menu.Item name='all listings' active={activeItem === 'all listings'} onClick={this.handleItemClick} /></Link>
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
