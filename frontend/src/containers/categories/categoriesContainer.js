import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchCategories } from './../../actions'

import Categories from './../../components/categories/categories'

class CategoriesContainer extends React.Component {
  componentWillMount() {
    this.props.actions.fetchCategories()
  }

  render() {
    return (
      <Categories {...this.props} />
    )
  }
}

const mapState = (store) => ({
  categories: store.categoriesPage
})

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators({
      fetchCategories
    }, dispatch)
  }
}

CategoriesContainer.propTypes = {
  actions: PropTypes.func.required
}

export default connect(mapState, mapDispatch)(CategoriesContainer)
