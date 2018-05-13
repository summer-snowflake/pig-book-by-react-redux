import React from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setAccessToken } from './../../actions'

//import Categories from './../../components/categories/categories'

class SignInContainer extends React.Component {
  componentWillMount() {
    this.props.actions.setAccessToken()
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
  actions: PropTypes.func.required
}

export default connect(mapState, mapDispatch)(SignInContainer)
