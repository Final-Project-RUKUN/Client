import axios from 'axios'

export function setData(payload) {
  return { type: 'admin/setData', payload }
}

export function setLoading (payload) {
  return {type : 'loading/setLoading', payload}
}

export function setLogin(payload) {
  return {type : 'login/setLogin', payload}
}

export function adminRegister(payload) {
  console.log(payload);
  return (dispatch) => {
    axios({
      url: "http://localhost:4000/admin/register",
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
      url: "http://localhost:4000/admin/login",
      method: "POST",
      data: payload
    })
    .then(data => {
      console.log(data, '>>>data<<<');
      localStorage.setItem('access_token', data.data)
      dispatch(setLogin(true))
    })
    .catch(err => {
      console.log(err);
    })
  }
}

export function adminLogout() {
  return (dispatch) => {
    localStorage.removeItem('access_token')
    dispatch(setLogin(false))
  }
}

export function getData() {
  return (dispatch) => {
    dispatch(setLoading(true))
    axios({
      url: "http://localhost:4000/transactions",
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
  console.log(data, 'action');
  const id = data
  return () => {
    axios({
      url: `http://localhost:4000/admin/change/${id}`,
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

  }
}