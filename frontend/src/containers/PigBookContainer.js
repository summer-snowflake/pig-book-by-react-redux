import React from 'react'

import Menu from './../components/menu'
import MainContent from './../components/main_content'

export default class PigBookContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="pigBookContainer">
        <Menu />
        <MainContent />
      </div>
    )
  }
}
