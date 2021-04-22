import axios from 'axios'
const url = 'https://rukun-server.herokuapp.com/transactions'

export function setTransactions(payload) {
  return { type: 'transactions/setTransactions', payload }
}

export function setLoading (payload) {
  return {type : 'loading/setLoading', payload}
}

export function setError (payload) {
  return {type : 'error/setError', payload}
}
  
export function setTransactionsAsync() {
  
  return (dispatch) => {
    axios({
      method: 'GET',
      url,
      headers: {
        access_token: localStorage.access_token
      }
    })
      .then(({data}) => {
        // console.log(data,'data');
        dispatch(setTransactions(data))
      })
      .catch(err => console.log(err))
  }
}

export function addTransactionsAsync(payload) {
  return (dispatch) => {
    dispatch(setLoading(true))
    axios({
      method: 'POST',
      url,
      headers: {
        access_token: localStorage.access_token
      },
      data: payload
    })
      .then(({data}) => {
        // console.log(data);
        dispatch(setTransactions(data.Transactions))
      })
      .catch(err => {
        // console.log(err);
        console.log('masuk error');
        dispatch(setError(true))
      })
      .finally(_ => {
        dispatch(setLoading(false))
      })
  }
}