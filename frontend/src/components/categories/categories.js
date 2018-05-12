import React from 'react'

const Categories = (props) => {
  return (
    <div className='categories-component' onClick={props.actions.loadCategories}>
      {'categoris'}
    </div>
  )
}

export default Categories
