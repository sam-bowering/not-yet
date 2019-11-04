import makeRequest from './requestor'

export function fetchList () {
  return makeRequest(`/list`)
    .then(res => res.body)
    .catch(() => { throw new Error('Error returning list') })
}

export default fetchList
