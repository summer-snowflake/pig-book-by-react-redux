import React from 'react'
import { render } from 'react-dom'
import { Switch, Route } from 'react-router-dom'

import Home from './home'
import DashBoard from './dash_board'
import List from './list'

export default class MainContent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="mainContentComponent">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/dashboard' component={DashBoard} />
          <Route path='/list' component={List} />
        </Switch>
      </div>
    )
  }
}
