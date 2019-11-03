import { removeGoal } from '../api/removeGoal'
import { GET_LIST_SUCCESS } from './getList';

export const DELETE_GOAL_PENDING = 'DELETE_GOAL_PENDING'
export const DELETE_GOAL_SUCCESS = 'DELETE_GOAL_SUCCESS'

export function deleteGoalPending () {
  return {
    type: DELETE_GOAL_PENDING
  }
}

export function deleteGoalSuccess () {
  return {
    type: GET_LIST_SUCCESS,
  }
}

export function deleteGoal (goalId) {
  return dispatch => {
    dispatch(deleteGoalPending())
    return removeGoal(goalId)
      .then(() => {
        dispatch(deleteGoalSuccess())
      })
  }
}