export function setTransactions(payload) {
  return { type: 'transactions/setTransactions', payload }
}
  
export function setTransactionsAsync() {
  const url = 'http://localhost:3001/transactions'
  
  return (dispatch) => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        dispatch(setTransactions(data))
      })
      .catch(err => console.log(err))
  }
}