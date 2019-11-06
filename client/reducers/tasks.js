import { GET_TASKS_SUCCESS } from '../actions/getTasksBySelectedGoal'
import { ADD_TASK_SUCCESS } from '../actions/addTask'

const tasksState = {
  tasks: []
}

export function tasks (state = tasksState, action) {
  switch (action.type) {
    case GET_TASKS_SUCCESS:
      return {
        goalTasks: [...action.tasks]
      }
    case ADD_TASK_SUCCESS:
      return {
        goalsTasks: [...state.goalTasks, action.task]
      }
    default:
      return state
  }
}
