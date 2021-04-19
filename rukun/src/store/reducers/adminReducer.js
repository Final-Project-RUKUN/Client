const initialState = {
  data: [{
    balance: 0,
    name: '',
    location: '',
    invitation_code: '',
    Transactions: []
  }],
  loading: false,
  login: false
}
  
function adminReducer(state = initialState, action) {
  const { type, payload } = action
  if(type === 'admin/setData') {
    return { ...state, data: payload }
  } else if (type === 'loading/setLoading') {
    return {...state, loading: payload}
  } else if (type === 'login/setLogin') {
    return {...state, login: payload}

  }
  return state
}
  
export default adminReducer