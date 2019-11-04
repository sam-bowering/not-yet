import makeRequest from './requestor'

export function fetchSelectedGoal (goalName) {
  return makeRequest(`/list/goal/${goalName}`)
    .then(res => res.body)
    .catch(() => { throw new Error('Error returning selected goal') })
}

export default fetchSelectedGoal
