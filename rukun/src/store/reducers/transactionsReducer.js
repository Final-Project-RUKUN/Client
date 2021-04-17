const initialState = {
    data: []
  }
  
  function transactionsReducer(state = initialState, action) {
    const { type, payload } = action
    if(type === 'transactions/setTransactions') {
        return { ...state, data: payload }
    } 
    return state
  }
  
  export default transactionsReducer
  