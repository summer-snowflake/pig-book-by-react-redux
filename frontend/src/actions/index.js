import * as types from '../utils/actionTypes'

export const render = () => {
  return { type: types.RENDER }
}

export const fetchCategories = () => {
  return { type: types.FETCH_CATEGORIES }
}
