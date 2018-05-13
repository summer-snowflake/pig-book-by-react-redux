import React from 'react'
import PropTypes from 'prop-types'

const Categories = (props) => {
  return (
    <div className='categories-component'>
      <div className='panel panel-defalt'>
        <div className='panel-header'>
          {'カテゴリの管理'}
        </div>
        <ul>
          {props.categories.map((category) => (
            <li key={category.id}>{category.name}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

Categories.propTypes = {
  actions: PropTypes.func.isRequired,
  categories: PropTypes.object.isRequired
}

export default Categories
