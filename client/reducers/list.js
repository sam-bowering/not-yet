import { GET_LIST_SUCCESS } from '../actions/getList'
import { ADD_GOAL_SUCCESS } from '../actions/addGoal'

export function list (state = [], action) {
  switch (action.type) {
    case GET_LIST_SUCCESS:
      return action.list
    default:
      return state
  }
}

export function addGoal (state = {}, action) {
  switch (action.type) {
    case ADD_GOAL_SUCCESS:
      return action.goal
    default:
      return state
  }
}