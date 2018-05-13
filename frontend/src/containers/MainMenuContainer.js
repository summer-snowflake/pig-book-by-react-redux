import React from 'react'
import PropTypes from 'prop-types'
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

MainMenuContainer.propTypes = {
  actions: PropTypes.func
}

export default connect(mapState, mapDispatch)(MainMenuContainer)
