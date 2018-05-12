import * as types from '../utils/actionTypes'

export const render = () => {
  return { type: types.RENDER }
}

export const loadCategories = () => {
  return { type: types.CATEGORIES }
}
