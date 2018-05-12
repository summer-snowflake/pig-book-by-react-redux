import React from 'react'

import MainMenu from './../containers/MainMenuContainer'
import MainContent from './../containers/MainContentContainer'

const App = () => {
  return (
    <div className='app-component'>
      <MainMenu />
      <MainContent />
    </div>
  )
}

export default App
