import { combineReducers } from 'redux'

import { list, addGoal } from './list'

export default combineReducers({
  list,
  addGoal
})