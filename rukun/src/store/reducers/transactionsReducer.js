const initialState = {
  data: [],
  loading: false,
  error: null
}
  
function transactionsReducer(state = initialState, action) {
  const { type, payload } = action
  if(type === 'transactions/setTransactions') {
    return { ...state, data: payload }
  } else if (type === 'loading/setLoading') {
    return {...state, loading: payload}
  } else if (type === 'error/setError') {
    return {...state, error: payload}
  }
  return state
}
  
export default transactionsReducer
  