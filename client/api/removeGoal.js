import makeRequest from './requestor'

export function removeGoal (goalId) {
  return makeRequest('/list/goals', 'delete', { id: goalId })
    .then(res => res.body)
    .catch(() => { throw new Error('Error deleting selected goal') })
}

export default removeGoal
