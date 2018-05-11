import React from 'react'

export default class Login extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="loginComponent">
        <a className='btn btn-primary' href='auth/twitter'>
          <span>{'Twitterでログイン'}</span>
        </a>
      </div>
    )
  }
}
