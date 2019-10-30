import { GET_LIST_SUCCESS } from '../actions/getList'
import { ADD_GOAL_SUCCESS } from '../actions/addGoal'

const listState = {
  listItems: []
}

export function listReducer (state = listState, action) {
  switch (action.type) {
    case GET_LIST_SUCCESS:
      return {
        listItems: [...action.list]
      }
    case ADD_GOAL_SUCCESS:
      return {
        listItems: [...state.listItems, action.goal]
      }
    default:
      return state
  }
}