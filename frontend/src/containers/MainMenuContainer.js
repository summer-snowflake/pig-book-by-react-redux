import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { render, getCurrentUser, logout } from './../actions'

import MainMenu from './../components/MainMenu'

class MainMenuContainer extends React.Component {
  render() {
    return (
      <MainMenu {...this.props} />
    )
  }
}

const mapState = (store) => ({
  mainMenu: store.mainMenu,
  userManager: store.userManager
})


function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators({
      render,
      getCurrentUser,
      logout
    }, dispatch)
  }
}

MainMenuContainer.propTypes = {
  actions: PropTypes.func
}

export default connect(mapState, mapDispatch)(MainMenuContainer)
