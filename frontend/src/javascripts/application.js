import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import Menu from './menu'
import MainContent from './main_content'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="appComponent">
        <Menu />
        <MainContent />
      </div>
    )
  }
}

render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
  ), document.getElementById('content')
)
