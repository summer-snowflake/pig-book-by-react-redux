import { GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_FAILURE } from './../utils/actionTypes.js'

const initialAppState = {
  user: undefined
}

function userManager(state = initialAppState, action) {
  switch (action.type) {
  case GET_USER_REQUEST:
    return Object.assign(state, { user: action.user })
  case GET_USER_SUCCESS:
    return Object.assign(state, { user: action.user })
  case GET_USER_FAILURE:
    return Object.assign(state, { user: {}, error: action.error })
  default:
    return state
  }
}

export default userManager
