import makeRequest from './requestor'

export function changeGoalDescription (desc, id) {
  return makeRequest(`/list/goal`, 'put', { desc, id })
    .then(res => res.body)
    .catch(() => { throw new Error('Error editing description') })
}

export default changeGoalDescription
