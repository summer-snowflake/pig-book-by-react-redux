import React from 'react'
import { render } from 'react-dom'

class PigBook extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="PigBookComponent">
        {'PIG BOOK: hello world!'}
      </div>
    )
  }
}

render(
  <PigBook url='/' />,
  document.getElementById('content')
)
