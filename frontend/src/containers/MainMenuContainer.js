import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { render } from './../actions'

import MainMenu from './../components/MainMenu'

const mapState = (store) => ({
  types: store.mainMenu
})

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators({
      render
    }, dispatch)
  }
}

export default connect(mapState, mapDispatch)(MainMenu)
