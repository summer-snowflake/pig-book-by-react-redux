import { combineReducers } from 'redux'
import mainMenu from './mainMenu'
import categoriesManager from './categoriesManager'

const rootReducer = combineReducers({
  mainMenu,
  categoriesManager
})

export default rootReducer
