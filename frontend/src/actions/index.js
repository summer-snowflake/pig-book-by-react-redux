import axios from 'axios'

import * as types from '../utils/actionTypes'

export const render = () => {
  return { type: types.RENDER }
}

export const setAccessToken = (token) => {
  return { type: types.SET_ACCESS_TOKEN, token: token }
}

export const getCurrentUser = () => {
  let token = localStorage.getItem('access_token')
  let loginHeaders = { headers: { Authorization: 'Token token=' + token } }
  return (dispatch) => {
    dispatch(getUserRequest())
    return axios.get('/api/user', loginHeaders)
      .then(res =>
        dispatch(getUserSuccess(res.data))
      ).catch(err =>
        dispatch(getUserFailure(err))
      )
  }
}

export const fetchCategories = () => {
  return { type: types.FETCH_CATEGORIES }
}

// --- not export

const getUserRequest = () => {
  return { type: types.GET_USER_REQUEST }
}

const getUserSuccess = (json) => {
  return { type: types.GET_USER_SUCCESS, user: json }
}

const getUserFailure = (error) => {
  return { type: types.GET_USER_FAILURE, error: error }
}
