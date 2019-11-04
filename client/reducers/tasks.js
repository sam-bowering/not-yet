import { GET_TASKS_SUCCESS } from '../actions/getTasksBySelectedGoal'

const tasksState = {
  tasks: []
}

export function tasks (state = tasksState, action) {
  switch (action.type) {
    case GET_TASKS_SUCCESS:
      return {
        goalTasks: [...action.tasks]
      }
    default:
      return state
  }
}
