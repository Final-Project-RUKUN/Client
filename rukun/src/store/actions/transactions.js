import axios from 'axios'

export function setTransactions(payload) {
  return { type: 'transactions/setTransactions', payload }
}
  
export function setTransactionsAsync() {
  const url = 'http://localhost:4000/transaction'
  
  return (dispatch) => {
    axios({
      method: 'GET',
      url,
      headers: {
        access_token: localStorage.access_token
      }
    })
      .then(({data}) => {
        dispatch(setTransactions(data.Transactions))
      })
      .catch(err => console.log(err))
  }
}