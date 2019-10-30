import makeRequest from './requestor'

export function postGoal (name, description, completed, primary, dependants) {
  return makeRequest(`/list/create`, 'post', { name, description, completed, primary, dependants })
    .then(res => res.body)
    .catch(() => { throw new Error('Error posting goal')})
}

export default postGoal