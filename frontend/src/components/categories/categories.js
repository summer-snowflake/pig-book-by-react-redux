import React from 'react'

const Categories = (props) => {
  console.log(props)
  console.log(props.categories)
  return (
    <div className='categories-component' onClick={props.actions.loadCategories}>
      {'categoris'}
    </div>
  )
}

export default Categories
