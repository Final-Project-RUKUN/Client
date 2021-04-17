
export function setUsers(payload) {
  return { type: 'users/setUsers', payload }
}

export function setUsersAsync() {
  const url = 'http://localhost:3002/users'

  return (dispatch) => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        dispatch(setUsers(data))
      })
      .catch(err => console.log(err))
  }
}