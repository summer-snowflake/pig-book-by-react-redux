import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getCurrentUser, logout } from './../../actions'
import { Redirect } from 'react-router'

class SignOutContainer extends React.Component {
  render() {
    return (
      <Redirect to='/login' />
    )
  }
}

const mapState = (store) => ({
  tokenManager: store.tokenManager
})

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators({
      getCurrentUser,
      logout
    }, dispatch)
  }
}

export default connect(mapState, mapDispatch)(SignOutContainer)
