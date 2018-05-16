import { RENDER, SET_ACCESS_TOKEN, REMOVE_ACCESS_TOKEN, GET_USER_FAILURE } from './../utils/actionTypes.js'

const initialAppState = {
  value: '',
  token: ''
}

function mainMenu(state = initialAppState, action) {
  switch (action.type) {
  case SET_ACCESS_TOKEN:
    localStorage.setItem('access_token', action.token)
    return { token: action.token }
  case REMOVE_ACCESS_TOKEN:
    localStorage.removeItem('access_token')
    return Object.assign({}, state, {
      value: '', token: ''
    })
  case GET_USER_FAILURE:
    localStorage.removeItem('access_token')
    return Object.assign({}, state, {
      value: '', token: ''
    })
  case RENDER:
    return Object.assign({}, state, {
      value: ''
    })
  default:
    return state
  }
}

export default mainMenu
