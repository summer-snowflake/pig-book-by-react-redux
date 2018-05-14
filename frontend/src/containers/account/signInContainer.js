import React from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setAccessToken } from './../../actions'
import queryString from 'query-string'

class SignInContainer extends React.Component {
  componentWillMount() {
    let token = queryString.parse(this.props.location.search).oauth_token
    this.props.actions.setAccessToken(token)
  }

  render() {
    return (
      <Redirect to='/' />
    )
  }
}

const mapState = (store) => ({
  store: store.tokenManager
})

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators({
      setAccessToken
    }, dispatch)
  }
}

SignInContainer.propTypes = {
  actions: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired
}

export default connect(mapState, mapDispatch)(SignInContainer)
