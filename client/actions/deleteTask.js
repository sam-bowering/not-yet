import removeTask from '../api/removeTask'

const DELETE_TASK_PENDING = 'DELETE_TASK_PENDING'
const DELETE_TASK_SUCCESS = 'DELETE_TASK_SUCCESS'

export function deleteTaskPending () {
  return {
    type: DELETE_TASK_PENDING
  }
}

export function deleteTaskSuccess (tasks) {
  return {
    type: DELETE_TASK_SUCCESS,
    tasks
  }
}

export function deleteTask (taskId, goalId) {
  return dispatch => {
    dispatch(deleteTaskPending())
    return removeTask(taskId, goalId)
      .then(updatedTaskList => {
        dispatch(deleteTaskSuccess(updatedTaskList))
      })
  }
}
