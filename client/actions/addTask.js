import { postTask } from '../api/postTask'

export const ADD_TASK_PENDING = 'ADD_TASK_PENDING'
export const ADD_TASK_SUCCESS = 'ADD_TASK_SUCCESS'

export function addTaskPending () {
  return {
    type: ADD_TASK_PENDING
  }
}

export function addTaskSuccess (task) {
  return {
    type: ADD_TASK_SUCCESS,
    task
  }
}

export function addTask (task) {
  const { title, description, goalId } = task
  return dispatch => {
    dispatch(addTaskPending())
    return postTask(title, description, goalId)
      .then(newTask => {
        dispatch(addTaskSuccess(newTask))
      })
  }
}
