import React from 'react'
import { render } from 'react-dom'

export default class List extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="listComponent">
        {'list'}
      </div>
    )
  }
}
