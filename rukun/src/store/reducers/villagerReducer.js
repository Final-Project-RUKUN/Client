const initialState = {
  village: [],
  loading: true
}

function villageReducer(state = initialState, action) {
  const { type, payload } = action
  if(type === 'village/setData') {
    return { ...state, data: payload }
  } else if (type === 'loading/setLoading') {
    return {...state, loading: payload}
  }
  return state
}
  
export default villageReducer