import * as types from '../utils/actionTypes'

export const render = () => {
  return { type: types.RENDER }
}

export const getCurrentUser = () => {
  return { type: types.CURRENT_USER }
}

export const fetchCategories = () => {
  return { type: types.FETCH_CATEGORIES }
}
