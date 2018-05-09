import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import Menu from './menu'
import MainContent from './main_content'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: null
    }
  }

  componentWillMount() {
    let token = localStorage.getItem('access_token')
    if (token) {
      this.getCurrentUser(token)
    }
  }

  getCurrentUser(token) {
    let login_headers = {
      headers: { Authorization: 'Token token=' + token }
    }
    fetch('api/user', { headers: { Authorization: 'Token token=' + token } })
      .then((res) => {
        if (res.status == 401) {
          localStorage.removeItem('access_token')
          this.setState({currentUser: null})
        } else if (res.status == 200) {
          res.json().then((res) => {
            this.setState({currentUser: res})
          })
        }
      })
      .catch((error) => {
        console.error(error)
      })
  }

  render() {
    return (
      <div className="appComponent">
        <Menu currentUser={this.state.currentUser} />
        <MainContent currentUser={this.state.currentUser} />
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
