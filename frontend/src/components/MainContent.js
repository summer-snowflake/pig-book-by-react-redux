import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './home'
import DashBoard from './dash_board'
import Input from './input'
import List from './list'
import Categories from './../containers/categories/categoriesContainer'
import Login from './account/login'
import Mypage from './account/mypage'
import SignIn from './../containers/account/signInContainer'
import SignOut from './../containers/account/signOutContainer'

const MainContent = () => {
  return (
    <div className='main-content-component'>
      <Switch>
        <Route component={Home} exact path='/' />
        <Route component={DashBoard} exact path='/dashboard' />
        <Route component={Input} exact path='/input' />
        <Route component={List} exact path='/list' />
        <Route component={Categories} exact path='/categories' />
        <Route component={Login} exact path='/login' />
        <Route component={Mypage} exact path='/mypage' />
        <Route component={SignIn} exact path='/sign_in' />
        <Route component={SignOut} exact path='/logout' />
      </Switch>
    </div>
  )
}

export default MainContent
