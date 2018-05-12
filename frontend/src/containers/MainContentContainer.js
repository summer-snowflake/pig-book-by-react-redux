import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loadCategories } from './../actions'

import MainContent from './../components/MainContent'

const mapState = (store) => ({
  types: store.mainMenu
})

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators({
      loadCategories
    }, dispatch)
  }
}

export default connect(mapState, mapDispatch)(MainContent)
