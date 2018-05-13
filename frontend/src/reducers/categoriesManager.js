import { FETCH_CATEGORIES } from './../utils/actionTypes.js'

const initialAppState = []

function categoriesManager(state = initialAppState, action) {
  switch (action.type) {
  case FETCH_CATEGORIES:
    return [{name: 'NAME', balance_of_payments: true}]
  default:
    return state
  }
}

export default categoriesManager
