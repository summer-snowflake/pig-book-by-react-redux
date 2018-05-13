import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './home'
import DashBoard from './dash_board'
import Input from './input'
import List from './list'
import Categories from './../containers/categories/categoriesContainer'
import Login from './account/login'

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
      </Switch>
    </div>
  )
}

export default MainContent
