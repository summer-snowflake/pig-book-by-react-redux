import React from 'react'
import PropTypes from 'prop-types'

const Categories = (props) => {
  return (
    <div className='categories-component'>
      <ul>
        {props.categories.map((category) => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
    </div>
  )
}

Categories.propTypes = {
  actions: PropTypes.func.isRequired,
  categories: PropTypes.object.isRequired
}

export default Categories
