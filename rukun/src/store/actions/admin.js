import axios from 'axios'

const baseUrl = 'http://3.85.16.248:4000'

export function setData(payload) {
  return { type: 'admin/setData', payload }
}

export function setLoading (payload) {
  return {type : 'loading/setLoading', payload}
}

export function setLogin(payload) {
  return {type : 'login/setLogin', payload}
}

export function setError(payload) {
  return {type : 'error/setError', payload}
}

export function adminRegister(payload) {
  return (dispatch) => {
    axios({
      url: baseUrl + "/admin/register",
      method: "POST",
      data: payload
    })
    .then(({data}) => {
      console.log(data);
    })
    .catch(err => {
      console.log(err);
    })
  }
}

export function adminLogin(payload) {
  return (dispatch) => {
    console.log('masukkkk koko');
    axios({
      url: baseUrl + "/admin/login",
      method: "POST",
      data: payload
    })
    .then(data=> {
      localStorage.setItem('access_token', data.data)
      dispatch(setLogin(true))
    })
    .catch(err => {
      console.log(err);
      dispatch(setError(err))
    })
  }
}

export function adminLogout() {
  return (dispatch) => {
    localStorage.removeItem('access_token')
    dispatch(setLogin(null))
  }
}

export function getData() {
  return (dispatch) => {
    dispatch(setLoading(true))
    axios({
      url: baseUrl + "/transactions",
      method: "GET",
      headers: {
        access_token: localStorage.access_token
      }
    })
    .then(({data}) => {
      // console.log(data);
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

export function changeAdmin(data) {
  const id = data
  return (dispatch) => {
    axios({
      url: baseUrl + `/admin/change/${id}`,
      method: "PUT",
      headers: {
        access_token: localStorage.access_token
      }
    })
    .then(({data}) => {
      console.log(data);
    })
    .catch(err => {
      console.log(err);
    })
    .finally(_ => {
      dispatch(adminLogout())
    })

  }
}