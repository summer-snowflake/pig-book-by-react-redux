import { combineReducers } from 'redux'
import mainMenu from './mainMenu'
import categoriesManager from './categoriesManager'
import tokenManager from './tokenManager'

const rootReducer = combineReducers({
  mainMenu,
  tokenManager,
  categoriesManager
})

export default rootReducer
