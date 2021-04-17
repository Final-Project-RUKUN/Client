import axios from 'axios'

export function setData(payload) {
  return { type: 'admin/setData', payload }
}

export function setLoading (payload) {
  return {type : 'loading/setLoading', payload}
}

export function adminRegister(payload) {
  return (dispatch) => {
    axios({
      url: "http://localhost:4000/admin/register",
      method: "POST",
      data: payload
    })
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      console.log(err);
    })
  }
}

export function adminLogin(payload) {
  return (dispatch) => {
    axios({
      url: "http://localhost:4000/admin/login",
      method: "POST",
      data: payload
    })
    .then(data => {
      localStorage.setItem('access_token', data.data)
    })
    .catch(err => {
      console.log(err);
    })
  }
}

export function adminLogout() {
  return (dispatch) => {
    localStorage.removeItem('access_token')
  }
}


export function getData() {
  return (dispatch) => {
    dispatch(setLoading(true))
    axios({
      url: "http://localhost:4000/transaction",
      method: "GET",
      headers: {
        access_token: localStorage.access_token
      }
    })
    .then(({data}) => {
      dispatch(setData(data))
    })
    .catch(err => {
      console.log(err, 'error fetch');
    })
    .finally(_ => {
      dispatch(setLoading(false))
    })
  }

}