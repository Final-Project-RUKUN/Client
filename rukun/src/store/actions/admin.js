import axios from 'axios'

export function registerAdmin(payload) {
  return { type: 'admin/registerAdmin', payload }
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
      console.log(data, 'data');
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

