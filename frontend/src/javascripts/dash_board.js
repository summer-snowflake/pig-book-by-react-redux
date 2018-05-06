import React from 'react'
import { render } from 'react-dom'

export default class DashBoard extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="dashBoardComponent">
        {'dash board'}
      </div>
    )
  }
}
