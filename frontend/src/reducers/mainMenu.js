import { RENDER, CURRENT_USER } from './../utils/actionTypes.js'

const initialAppState = {
  value: ''
}

function mainMenu(state = initialAppState, action) {
  let user = { auth: { name: '名前' } }
  state = { value: '', user: user }

  switch (action.type) {
  case RENDER:
    return state
  case CURRENT_USER:
    return state
  default:
    return state
  }
}

export default mainMenu
