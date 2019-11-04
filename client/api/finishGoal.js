import makeRequest from './requestor'

export function finishGoal (id) {
  return makeRequest(`/list/goals`, 'put', { id })
    .then(res => res.body)
    .catch(() => { throw new Error('Error updating goal')})
}

export default finishGoal