import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { logout } from './../../actions'
import { Redirect } from 'react-router'

class SignOutContainer extends React.Component {
  componentWillMount() {
    this.props.actions.logout()
  }

  render() {
    return (
      <Redirect to='/login' />
    )
  }
}

const mapState = (store) => ({
  userManager: store.userManager,
  tokenManager: store.tokenManager
})

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators({
      logout
    }, dispatch)
  }
}

export default connect(mapState, mapDispatch)(SignOutContainer)
