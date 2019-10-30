import { fetchList } from '../api/fetchList'

export const GET_LIST_PENDING = 'GET_LIST_PENDING'
export const GET_LIST_SUCCESS = 'GET_LIST_SUCCESS'

export function getListPending () {
  return {
    type: GET_LIST_PENDING
  }
}

export function getListSuccess (list) {
  return {
    type: GET_LIST_SUCCESS,
    list
  }
}

export function getList () {
  return dispatch => {
    dispatch(getListPending())
    return fetchList()
      .then(list => {
        dispatch(getListSuccess(list))
      })
  }
}
