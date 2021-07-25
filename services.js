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

export const getMetaData = (id, value = '') => {
  let url = 'get-page-meta'
  if (value === '1') {
    url = 'get-category-meta'
  }
  if (value === '2') {
    url = 'get-service-meta'
  }
  return fetch(`${API_URL}${url}/${id}`, getObject('get'))
    .then((res) => {
      return res.json()
    })
    .catch((err) => {
      return err
    })
}
