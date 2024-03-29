import { postGoal } from '../api/postGoal'

export const ADD_GOAL_PENDING = 'ADD_GOAL_PENDING'
export const ADD_GOAL_SUCCESS = 'ADD_GOAL_SUCCESS'

export function addGoalPending () {
  return {
    type: ADD_GOAL_PENDING
  }
}

export function addGoalSuccess (goal) {
  return {
    type: ADD_GOAL_SUCCESS,
    goal
  }
}

export function addGoal (goal) {
  const { title, description, completed, primary, dependants } = goal
  return dispatch => {
    dispatch(addGoalPending())
    return postGoal(title, description, completed, primary, dependants)
      .then(newGoal => {
        dispatch(addGoalSuccess(newGoal))
      })
  }
}
