import axios from 'axios'
// import { useSelector } from 'react-redux'

export function setUsers(payload) {
  return { type: 'users/setUsers', payload }
}

export function setCurrentUser(payload) {
  return { type: 'currentUser/setCurrentUser', payload }
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

export function setCurrentUserAsync() {
  // const id = useSelector(state => state.admin.currentId)

  const url = 'http://localhost:4000/user/' + localStorage.id

  return (dispatch) => {
    axios({
      method: 'GET',
      url,
      headers: {
        access_token: localStorage.access_token
      }
    })
      .then(({data}) => {
        console.log(data, "dataaaa admiiiinn");
        dispatch(setCurrentUser(data))
      })
      .catch(err => console.log(err))
  }
}