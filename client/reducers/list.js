import { GET_LIST_SUCCESS } from '../actions/getList'
import { ADD_GOAL_SUCCESS } from '../actions/addGoal'

const listState = {
  listItems: []
}

export function listReducer (state = listState, action) {
  switch (action.type) {
    case GET_LIST_SUCCESS:
      const uncompletedList = action.list.filter(listItem => listItem.completed === 0 || listItem.completed === false)
      const completedList = action.list.filter(listItem => listItem.completed === 1 || listItem.completed === true)
      return {
        listItems: [...action.list],
        uncompletedList,
        completedList
      }
    case ADD_GOAL_SUCCESS:
      return {
        listItems: [...state.listItems, action.goal]
      }
    default:
      return state
  }
}