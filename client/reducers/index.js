import { combineReducers } from 'redux'

import { listReducer } from './list'
import { navigation } from './navigation'

export default combineReducers({
  listReducer,
  navigation
})
