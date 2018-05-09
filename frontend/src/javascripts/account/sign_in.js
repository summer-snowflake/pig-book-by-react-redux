import React from 'react'
import { Redirect } from 'react-router'
import queryString from 'query-string'

export default class SignIn extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    let token = queryString.parse(this.props.location.search).oauth_token
    localStorage.setItem('access_token', token)
  }

  render() {
    return (
      <Redirect to='/mypage' />
    )
  }
}
