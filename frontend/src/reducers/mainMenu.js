import { RENDER, CURRENT_USER } from './../utils/actionTypes.js'

const initialAppState = {
  value: ''
}

function mainMenu(state = initialAppState, action) {
  let user = { auth: { name: '名前' } }
  user = getUser()
  state = { value: '', user: user }

  switch (action.type) {
  case RENDER:
    return state
  case CURRENT_USER:
    return state
  default:
    return state
  }
}

function getUser() {
  let token = localStorage.getItem('access_token')
  if (!token) {
    return undefined
  }
  fetch('api/user', { headers: { Authorization: 'Token token=' + token } })
    .then((res) => {
      if (res.status == 401) {
        localStorage.removeItem('access_token')
        return undefined
      } else if (res.status == 200) {
        res.json().then((res) => {
          return res
        })
      }
    })
    .catch((error) => {
      console.error(error)
    })
}

export default mainMenu
