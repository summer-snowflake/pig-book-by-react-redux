import { GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_FAILURE } from './../utils/actionTypes.js'

const initialAppState = {
  user: undefined
}

function userManager(state = initialAppState, action) {
  switch (action.type) {
  case GET_USER_REQUEST:
    return state
  case GET_USER_SUCCESS:
    return { user: action.user }
  case GET_USER_FAILURE:
    return state
  default:
    return state
  }
}

export default userManager
