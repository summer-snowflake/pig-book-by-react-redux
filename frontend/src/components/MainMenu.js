import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const MainMenu = (props) => {
  let handleClickMenu = props.actions.render
  let handleClickLogoutLink = props.actions.logout

  return (
    <div className="main-menu-component">
      <ul>
        <li><Link onClick={handleClickMenu} to='/'>{'HOME'}</Link></li>
        { (Object.keys(props.userManager.user).length > 0) ? (
          <span>
            <li><Link onClick={handleClickMenu} to='/dashboard'>{'ダッシュボード'}</Link></li>
            <li><Link onClick={handleClickMenu} to='/list'>{'リスト'}</Link></li>
            <li><Link onClick={handleClickMenu} to='/input'>{'入力する'}</Link></li>
            <li><Link onClick={handleClickMenu} to='/mypage'>{'マイページ'}</Link></li>
            <li><Link onClick={handleClickMenu} to='/categories'>{'カテゴリ'}</Link></li>
            <li><Link onClick={handleClickLogoutLink} to='/logout'>{'ログアウト'}</Link></li>
          </span>
        ) : (
          <li><Link onClick={handleClickMenu} to='/login'>{'ログイン'}</Link></li>
        )}
      </ul>
    </div>
  )
}

MainMenu.propTypes = {
  actions: PropTypes.func,
  userManager: PropTypes.object
}

export default MainMenu
