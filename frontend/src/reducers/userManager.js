import { GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_FAILURE, REMOVE_ACCESS_TOKEN } from './../utils/actionTypes.js'

const initialAppState = {
  user: {}
}

function userManager(state = initialAppState, action) {
  switch (action.type) {
  case REMOVE_ACCESS_TOKEN:
    return { user: {} }
  case GET_USER_REQUEST:
    return state
  case GET_USER_SUCCESS:
    return { user: action.user }
  case GET_USER_FAILURE:
    return { user: {} }
  default:
    return state
  }
}

export default userManager
