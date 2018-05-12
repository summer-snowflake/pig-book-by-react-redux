import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import MainContent from './../components/MainContent'

const mapState = (store) => ({
  types: store.mainMenu
})

export default connect(mapState)(MainContent)
