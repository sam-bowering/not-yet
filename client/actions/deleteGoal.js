import { removeGoal } from '../api/removeGoal'

export const DELETE_GOAL_PENDING = 'DELETE_GOAL_PENDING'
export const DELETE_GOAL_SUCCESS = 'DELETE_GOAL_SUCCESS'

export function deleteGoalPending () {
  return {
    type: DELETE_GOAL_PENDING
  }
}

export function deleteGoalSuccess (list) {
  return {
    type: DELETE_GOAL_SUCCESS,
    list
  }
}

export function deleteGoal (goalId) {
  return dispatch => {
    dispatch(deleteGoalPending())
    return removeGoal(goalId)
      .then(updatedList => {
        dispatch(deleteGoalSuccess(updatedList))
      })
  }
}
