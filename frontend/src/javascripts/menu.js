import React from 'react'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'

class Menu extends React.Component {
  constructor(props) {
    super(props)
  }

  logout(props) {
    localStorage.removeItem('access_token')
    console.log('logout')
    console.log(props)
    this.props.dispatch(pushPath('/')
  }

  render() {
    return (
      <div className="menuComponent">
        <li><Link to='/'>{'Home'}</Link></li>
        {this.props.currentUser ? (
          <span>
            <li><Link to='/dashboard'>{'ダッシュボード'}</Link></li>
            <li><Link to='/list'>{'リスト'}</Link></li>
            <li><Link to='/input'>{'入力する'}</Link></li>
            <li><Link to='/mypage'>{this.props.currentUser.auth.name}</Link></li>
            <li><a onClick={this.logout}>{'ログアウト'}</a></li>
          </span>
        ) : (
          <li><Link to='/login'>{'ログイン'}</Link></li>
        )}
      </div>
    )
  }
}

Menu.propTypes = {
  currentUser: PropTypes.object
}

export default withRouter(Menu)
