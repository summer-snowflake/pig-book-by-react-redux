import { combineReducers } from 'redux'
import mainMenu from './mainMenu'
import categoriesManager from './categoriesManager'
import tokenManager from './tokenManager'
import userManager from './userManager'

const rootReducer = combineReducers({
  mainMenu,
  userManager,
  tokenManager,
  categoriesManager
})

export default rootReducer
