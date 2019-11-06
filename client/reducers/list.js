import { GET_LIST_SUCCESS } from '../actions/getList'
import { ADD_GOAL_SUCCESS } from '../actions/addGoal'
import { GET_SELECTEDGOAL_SUCCESS } from '../actions/getSelectedGoal'
import { DELETE_GOAL_SUCCESS } from '../actions/deleteGoal'
import { COMPLETE_GOAL_SUCCESS } from '../actions/completeGoal'
import { EDIT_GOALDESCRIPTION_SUCCESS } from '../actions/editGoalDescription'

const listState = {
  fullList: []
}

export function lists (state = listState, action) {
  switch (action.type) {
    case GET_LIST_SUCCESS:
      return {
        fullList: [...action.list],
        uncompletedList: [...action.list.filter(listItem => listItem.completed === 0 || listItem.completed === false)],
        completedList: [...action.list.filter(listItem => listItem.completed === 1 || listItem.completed === true)]
      }
    case ADD_GOAL_SUCCESS:
      return {
        fullList: [...state.fullList, action.goal],
        uncompletedList: [...state.uncompletedList, action.goal],
        completedList: [...state.completedList]
      }
    case GET_SELECTEDGOAL_SUCCESS:
      return {
        fullList: [...state.fullList],
        uncompletedList: [...state.uncompletedList],
        selectedGoal: action.selectedGoal,
        completedList: [...state.completedList]
      }
    case DELETE_GOAL_SUCCESS:
      return {
        fullList: [...action.list],
        uncompletedList: [...action.list.filter(listItem => listItem.completed === 0 || listItem.completed === false)],
        completedList: [...action.list.filter(listItem => listItem.completed === 1 || listItem.completed === true)]
      }
    case COMPLETE_GOAL_SUCCESS:
      return {
        fullList: [...action.list],
        uncompletedList: [...action.list.filter(listItem => listItem.completed === 0 || listItem.completed === false)],
        completedList: [...action.list.filter(listItem => listItem.completed === 1 || listItem.completed === true)]
      }
    case EDIT_GOALDESCRIPTION_SUCCESS:
      return {
        fullList: [...action.list],
        uncompletedList: [...action.list.filter(listItem => listItem.completed === 0 || listItem.completed === false)],
        completedList: [...action.list.filter(listItem => listItem.completed === 1 || listItem.completed === true)]
      }
    default:
      return state
  }
}
