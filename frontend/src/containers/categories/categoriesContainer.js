import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loadCategories } from './../../actions'

import Categories from './../../components/categories/categories'

const mapState = (store) => ({
  types: store.categoriesPage
})

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators({
      loadCategories
    }, dispatch)
  }
}

export default connect(mapState, mapDispatch)(Categories)
