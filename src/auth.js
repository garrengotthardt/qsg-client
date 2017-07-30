import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default function (Component, inheritedProps) {
  class Authentication extends Component {
    static contextTypes = {
      router: PropTypes.object
    }
    componentDidMount () {
      if(!localStorage.getItem('email')){
        this.context.router.history.push('/login')
      }
    }
    componentWillUpdate () {
      if(!localStorage.getItem('email')){
        this.context.router.history.push('/login')
      }
    }
    render(){
      console.log('inheritedProps:', inheritedProps)
      return <Component  {...this.props} />
    }
  }

  return Authentication
}
