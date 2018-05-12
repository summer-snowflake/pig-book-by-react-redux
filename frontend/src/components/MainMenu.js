import React from 'react'
import { Link } from 'react-router-dom'

const MainMenu = (props) => {
  return (
    <div className="main-menu-component">
      <ul>
        <li><Link to='/' onClick={props.actions.render}>{'Home'}</Link></li>
        <li><Link to='/dashboard' onClick={props.actions.render}>{'ダッシュボード'}</Link></li>
        <li><Link to='/list' onClick={props.actions.render}>{'リスト'}</Link></li>
        <li><Link to='/input' onClick={props.actions.render}>{'入力する'}</Link></li>
        <li><Link to='/categories' onClick={props.actions.render}>{'カテゴリ'}</Link></li>
        <li><Link to='/login' onClick={props.actions.render}>{'ログイン'}</Link></li>
      </ul>
    </div>
  )
}

export default MainMenu
