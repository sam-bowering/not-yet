import { changeGoalDescription } from '../api/changeGoalDescription'

export const EDIT_GOALDESCRIPTION_PENDING = 'EDIT_GOALDESCRIPTION_PENDING'
export const EDIT_GOALDESCRIPTION_SUCCESS = 'EDIT_GOALDESCRIPTION_SUCCESS'

export function editGoalDescriptionPending () {
  return {
    type: EDIT_GOALDESCRIPTION_PENDING
  }
}

export function editGoalDescriptionSuccess (list) {
  return {
    type: EDIT_GOALDESCRIPTION_SUCCESS,
    list
  }
}

export function editGoalDescription (description) {
  const { desc, id } = description
  return dispatch => {
    dispatch(editGoalDescriptionPending())
    return changeGoalDescription(desc, id)
      .then(updatedList => {
        dispatch(editGoalDescriptionSuccess(updatedList))
      })
  }
}
