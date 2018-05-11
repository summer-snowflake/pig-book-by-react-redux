import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import PigBookContainer from './containers/PigBookContainer'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="appComponent">
        <PigBookContainer />
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
