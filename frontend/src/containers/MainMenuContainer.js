import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { render, getCurrentUser } from './../actions'

import MainMenu from './../components/MainMenu'

class MainMenuContainer extends React.Component {
  componentWillMount() {
    this.props.actions.getCurrentUser()
  }

  render() {
    return (
      <MainMenu {...this.props} />
    )
  }
}

const mapState = (store) => ({
  store: store.mainMenu
})


function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators({
      render,
      getCurrentUser
    }, dispatch)
  }
}

export default connect(mapState, mapDispatch)(MainMenuContainer)
