import makeRequest from './requestor'

export function fetchTasksBySelectedGoal (goalId) {
  return makeRequest(`/tasks/goal/${goalId}`)
    .then(res => res.body)
    .catch(() => { throw new Error('Error returning list') })
}
