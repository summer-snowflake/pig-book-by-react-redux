import { SET_ACCESS_TOKEN } from './../utils/actionTypes.js'

const initialAppState = false

function tokenManager(state = initialAppState, action) {
  switch (action.type) {
  case SET_ACCESS_TOKEN: {
    localStorage.setItem('access_token', action.token)
    return true
  }
  default:
    return state
  }
}

export default tokenManager
