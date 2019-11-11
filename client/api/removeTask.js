import makeRequest from './requestor'

export function removeTask (taskId, goalId) {
  return makeRequest('/tasks/goal/:taskId', 'delete', { id: taskId, goalId })
    .then(res => res.body)
    .catch(() => { throw new Error('Error deleting selected task') })
}

export default removeTask
