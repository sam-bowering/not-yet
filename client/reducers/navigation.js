import { GET_SELECTEDGOAL_PENDING, GET_SELECTEDGOAL_SUCCESS } from '../actions/getSelectedGoal'
import { GET_TASKS_PENDING, GET_TASKS_SUCCESS } from '../actions/getTasksBySelectedGoal'

const navState = {
  isLoading: false,
  tasksLoading: false
}

export function navigation (state = navState, action) {
  switch (action.type) {
    case GET_SELECTEDGOAL_PENDING:
      return {
        isLoading: true,
        tasksLoading: state.tasksLoading
      }
    case GET_SELECTEDGOAL_SUCCESS:
      return {
        isLoading: false,
        tasksLoading: state.tasksLoading
      }
    case GET_TASKS_PENDING:
      return {
        tasksLoading: true,
        isLoading: state.isLoading
      }
    case GET_TASKS_SUCCESS:
      return {
        tasksLoading: false,
        isLoading: state.isLoading
      }
    default:
      return state
  }
}
