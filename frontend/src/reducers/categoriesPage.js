import { CATEGORIES } from './../utils/actionTypes.js'

const initialAppState = {
  value: []
}

function categoriesPage(state = initialAppState, action) {
  switch (action.type) {
  case CATEGORIES:
    return { value: [{name: 'NAME', balance_of_payments: true}] }
  default:
    return state
  }
}

export default categoriesPage
