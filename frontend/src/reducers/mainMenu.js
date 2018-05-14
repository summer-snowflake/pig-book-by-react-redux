import { RENDER } from './../utils/actionTypes.js'

const initialAppState = {
  value: ''
}

function mainMenu(state = initialAppState, action) {
  switch (action.type) {
  case RENDER:
    return { value: '' }
  default:
    return state
  }
}

export default mainMenu
