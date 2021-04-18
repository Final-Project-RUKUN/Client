import axios from 'axios'

export function setData(payload) {
  return { type: 'village/setData', payload }
}

export function setLoading (payload) {
  return {type : 'loading/setLoading', payload}
}


export function getVillagers() {
  return (dispatch) => {
    dispatch(setLoading(true))
    axios({
      url: "http://localhost:4000/villagers",
      method: "GET",
      headers: {
        access_token: localStorage.access_token
      }
    })
    .then(({data}) => {
      // console.log(data,' fetch');
      dispatch(setData(data))
    })
    .catch(err => {
      console.log(err);
    })
    .finally(_ => {
      dispatch(setLoading(false))
    })
  }
}

export function deleteVillagers(data) {
  console.log(data, 'acinot');
  const id = data
  return (dispatch) => {
    axios({
      url: `http://localhost:4000/villagers/${id}`,
      method: "DELETE",
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


