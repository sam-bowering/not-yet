import { combineReducers } from 'redux'

import { lists } from './list'
import { navigation } from './navigation'
import { tasks } from './tasks'

export default combineReducers({
  lists,
  navigation,
  tasks
})
