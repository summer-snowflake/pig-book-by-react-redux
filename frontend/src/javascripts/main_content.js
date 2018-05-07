import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './home'
import DashBoard from './dash_board'
import List from './list'
import Input from './input'

export default class MainContent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="mainContentComponent">
        <Switch>
          <Route component={Home} exact path='/' />
          <Route component={DashBoard} path='/dashboard' />
          <Route component={List} path='/list' />
          <Route component={Input} path='/input' />
        </Switch>
      </div>
    )
  }
}
