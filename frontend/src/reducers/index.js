import { combineReducers } from 'redux'
import mainMenu from './mainMenu'
import categoriesManager from './categoriesManager'
import userManager from './userManager'

const rootReducer = combineReducers({
  mainMenu,
  userManager,
  categoriesManager
})

export default rootReducer
