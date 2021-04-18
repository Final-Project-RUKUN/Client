const initialState = {
  data: [{
    balance: 0,
    name: '',
    Transactions: []
  }],
  loading: false
}
  
function adminReducer(state = initialState, action) {
  const { type, payload } = action
  if(type === 'admin/setData') {
    return { ...state, data: payload }
  } else if (type === 'loading/setLoading') {
    return {...state, loading: payload}
  }
  return state
}
  
export default adminReducer