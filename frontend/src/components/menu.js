import React from 'react'
import { Link } from 'react-router-dom'

export default class Menu extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="menuComponent">
        <li><Link to='/'>{'Home'}</Link></li>
        <li><Link to='/dashboard'>{'ダッシュボード'}</Link></li>
        <li><Link to='/list'>{'リスト'}</Link></li>
        <li><Link to='/input'>{'入力する'}</Link></li>
        <li><Link to='/categories'>{'カテゴリ'}</Link></li>
        <li><Link to='/login'>{'ログイン'}</Link></li>
      </div>
    )
  }
}
