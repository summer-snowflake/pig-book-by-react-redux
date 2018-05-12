import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loadCategories } from './../../actions'

import Categories from './../../components/categories/categories'

const mapState = (store) => ({
  types: store.categoriesPage
})

class CategoriesContainer extends React.Component {

  componentWillMount() {
    console.log('component will mount')
  }

  render() {
    return (
      <Categories {...this.props} />
    )
  }
}

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators({
      loadCategories
    }, dispatch)
  }
}

export default connect(mapState, mapDispatch)(CategoriesContainer)
