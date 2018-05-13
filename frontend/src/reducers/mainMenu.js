import { RENDER, CURRENT_USER } from './../utils/actionTypes.js'

const initialAppState = {
  value: ''
}

function mainMenu(state = initialAppState, action) {
  switch (action.type) {
  case RENDER:
    return { value: '' }
  case CURRENT_USER: {
    let user = { auth: { name: '名前' } }
    return { user: user }
  }
  default:
    return state
  }
}

export default mainMenu
