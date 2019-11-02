import { fetchSelectedGoal } from '../api/fetchSelectedGoal'

export const GET_SELECTEDGOAL_PENDING = 'GET_SELECTEDGOAL_PENDING'
export const GET_SELECTEDGOAL_SUCCESS = 'GET_SELECTEDGOAL_SUCCESS'

export function getSelectedGoalPending () {
  return {
    type: GET_SELECTEDGOAL_PENDING
  }
}

export function getSelectedGoalSuccess (selectedGoal) {
  return {
    type: GET_SELECTEDGOAL_SUCCESS,
    selectedGoal
  }
}

export function getSelectedGoal (goalId) {
  return dispatch => {
    dispatch(getSelectedGoalPending())
    return fetchSelectedGoal(goalId)
      .then(selectedGoal => {
        dispatch(getSelectedGoalSuccess(selectedGoal))
      })
  }
}