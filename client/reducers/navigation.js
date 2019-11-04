import { GET_SELECTEDGOAL_PENDING, GET_SELECTEDGOAL_SUCCESS } from '../actions/getSelectedGoal'

export function navigation (state = false, action) {
  switch (action.type) {
    case GET_SELECTEDGOAL_PENDING:
      return {
        isLoading: true
      }
    case GET_SELECTEDGOAL_SUCCESS:
      return {
        isLoading: false
      }
    default:
      return state
  }
}
