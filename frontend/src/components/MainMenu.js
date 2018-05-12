import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const MainMenu = (props) => {
  let handleClickMenu = props.actions.render

  return (
    <div className="main-menu-component">
      <ul>
        <li><Link onClick={handleClickMenu} to='/'>{'Home'}</Link></li>
        <li><Link onClick={handleClickMenu} to='/dashboard'>{'ダッシュボード'}</Link></li>
        <li><Link onClick={handleClickMenu} to='/list'>{'リスト'}</Link></li>
        <li><Link onClick={handleClickMenu} to='/input'>{'入力する'}</Link></li>
        <li><Link onClick={handleClickMenu} to='/categories'>{'カテゴリ'}</Link></li>
        <li><Link onClick={handleClickMenu} to='/login'>{'ログイン'}</Link></li>
      </ul>
    </div>
  )
}

// TODO: 効果について要確認
MainMenu.propTypes = {
  actions: PropTypes.func
}

export default MainMenu
