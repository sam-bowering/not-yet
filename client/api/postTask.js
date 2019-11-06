import makeRequest from './requestor'

export function postTask (title, description, goalId) {
  return makeRequest(`/tasks/goal`, 'post', { title, description, goalId })
    .then(res => res.body)
    .catch(() => { throw new Error('Error posting task') })
}

export default postTask
