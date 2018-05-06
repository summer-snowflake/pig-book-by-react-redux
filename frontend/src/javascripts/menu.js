import React from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router-dom'

export default class Menu extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="menuComponent">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/dashboard'>{'ダッシュボード'}</Link></li>
        <li><Link to='/list'>{'リスト'}</Link></li>
      </div>
    )
  }
}
