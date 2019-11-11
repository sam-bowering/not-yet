import { GET_TASKS_SUCCESS } from '../actions/getTasksBySelectedGoal'
import { ADD_TASK_SUCCESS } from '../actions/addTask'
import { DELETE_TASK_SUCCESS } from '../actions/deleteTask'

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
        goalTasks: [...state.goalTasks, action.task]
      }
    case DELETE_TASK_SUCCESS:
      return {
        goalTasks: ['fart']
      }
    default:
      return state
  }
}
