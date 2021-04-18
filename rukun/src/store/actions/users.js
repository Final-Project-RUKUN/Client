import axios from 'axios'

export function setUsers(payload) {
  return { type: 'users/setUsers', payload }
}

export function setUsersAsync() {
  const url = 'http://localhost:4000/villagers'

  return (dispatch) => {
    axios({
      method: 'GET',
      url,
      headers: {
        access_token: localStorage.access_token
      }
    })
      .then(({data}) => {
        dispatch(setUsers(data.Users))
      })
      .catch(err => console.log(err))
  }
}