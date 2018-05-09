import React from 'react'
import { Redirect } from 'react-router'

export default class Logout extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    localStorage.removeItem('access_token')
    console.log('logout')
  }

  render() {
    return (
      <div className="logoutComponent">
        <Redirect to='/login' refresh='true' />
      </div>
    )
  }
}
