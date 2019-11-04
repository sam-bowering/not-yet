import { finishGoal } from '../api/finishGoal'

export const COMPLETE_GOAL_PENDING = 'COMPLETE_GOAL_PENDING'
export const COMPLETE_GOAL_SUCCESS = 'COMPLETE_GOAL_SUCCESS'

export function completeGoalPending () {
  return {
    type: COMPLETE_GOAL_PENDING
  }
}

export function completeGoalSuccess (list) {
  return {
    type: COMPLETE_GOAL_SUCCESS,
    list
  }
}

export function completeGoal (id) {
  return dispatch => {
    dispatch(completeGoalPending())
    return finishGoal(id)
      .then(updatedList => {
        dispatch(completeGoalSuccess(updatedList))
      })
  }
}
