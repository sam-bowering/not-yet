import { GET_LIST_SUCCESS } from '../actions/list'

export default function list (state = [], action) {
  switch (action.type) {
    case GET_LIST_SUCCESS:
      return action.list
    default:
      return state
  }
}