import { API_URL } from './config'
// import { useHistory } from 'react-router-dom'

// const history = useHistory()
function getObject(method = 'get', data = {}) {
  const object = {
    method: method,
    // credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }

  if (method !== 'get' && method !== 'delete') {
    object.body = JSON.stringify(data)
  }

  return object
}

export const getServicesMenu = () => {
  return fetch(`${API_URL}service-menu`, getObject('get'))
    .then((res) => {
      return res.json()
    })
    .catch((err) => {
      return err
    })
}
