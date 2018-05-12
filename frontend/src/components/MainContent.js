import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './Home'
import DashBoard from './DashBoard'
import List from './List'
import Input from './Input'
import CategoriesList from './categories/CategoriesList'
import Login from './account/Login'

const MainContent = () => {
  return (
    <Switch>
      <Route component={Home} exact path='/' />
      <Route component={DashBoard} exact path='/dashboard' />
      <Route component={Input} exact path='/input' />
      <Route component={List} exact path='/list' />
      <Route component={CategoriesList} exact path='/categories' />
      <Route component={Login} exact path='/login' />
    </Switch>
  )
}

export default MainContent
