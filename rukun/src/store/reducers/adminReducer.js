const initialState = {
  data: [{
    balance: 0,
    name: '',
    location: '',
    invitation_code: '',
    Transactions: []
  }],
  loading: false,
  login: false,
  currentId: 0
}
  
function adminReducer(state = initialState, action) {
  const { type, payload } = action
  if(type === 'admin/setData') {
    return { ...state, data: payload }
  } else if (type === 'loading/setLoading') {
    return {...state, loading: payload}
  } else if (type === 'login/setLogin') {
    return {...state, login: payload}
  } else if (type === 'currentId/setCurrentId') {
    return {...state, currentId: payload}

  }
  return state
}
  
export default adminReducer