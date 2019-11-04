import { fetchTasksBySelectedGoal } from '../api/fetchTasksBySelectedGoal'

export const GET_TASKS_PENDING = 'GET_TASKS_PENDING'
export const GET_TASKS_SUCCESS = 'GET_TASKS_SUCCESS'

export function getTasksPending () {
  return {
    type: GET_TASKS_PENDING
  }
}

export function getTasksSuccess (tasks) {
  return {
    type: GET_TASKS_SUCCESS,
    tasks
  }
}

export function getTasksBySelectedGoal (goalId) {
  return dispatch => {
    dispatch(getTasksPending())
    return fetchTasksBySelectedGoal(goalId)
      .then(tasks => {
        dispatch(getTasksSuccess(tasks))
      })
  }
}
