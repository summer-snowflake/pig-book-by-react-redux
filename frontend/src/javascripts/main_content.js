import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route } from 'react-router-dom'
import { Redirect } from 'react-router'

import Home from './home/home'
import DashBoard from './dash_board/dash_board'
import List from './list/list'
import Input from './input/input'
import Mypage from './account/mypage'
import Login from './account/login'
import Logout from './account/logout'
import SignIn from './account/sign_in'

export default class MainContent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="mainContentComponent">
        <Switch>
          <Route exact component={Home} path='/' />
          <Route exact component={SignIn} path='/sign_in' />
          {this.props.currentUser ? (
            <div>
              <Route exact component={DashBoard} path='/dashboard' />
              <Route exact component={List} path='/list' />
              <Route exact component={Input} path='/input' />
              <Route exact component={Mypage} path='/mypage' />
              <Route exact component={Logout} path='/logout' />
            </div>
          ) : (
            <div>
              //<Redirect to={'/login'} />
              <Route component={Login} path='/login' />
            </div>
          )}
        </Switch>
      </div>
    )
  }
}

MainContent.propTypes = {
  currentUser: PropTypes.object
}
