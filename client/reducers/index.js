import { combineReducers } from 'redux'

import { lists } from './list'
import { navigation } from './navigation'

export default combineReducers({
  lists,
  navigation
})
