import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { render, getCurrentUser, logout } from './../actions'

import MainMenu from './../components/MainMenu'

class MainMenuContainer extends React.Component {
  componentWillMount() {
    // TODO: urlがsign_inの際には実行しないようにする
    console.log(this.props.url)
    //this.props.actions.getCurrentUser()
  }

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
