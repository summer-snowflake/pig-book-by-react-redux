import { combineReducers } from 'redux'
import mainMenu from './mainMenu'
import categoriesPage from './categoriesPage'

const rootReducer = combineReducers({
  mainMenu,
  categoriesPage
})

export default rootReducer
