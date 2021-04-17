const initialState = {
  data: [],
  loading: false,
  error: null
}
  
function suggestionsReducer(state = initialState, action) {
  const { type, payload } = action
  if(type === 'suggestions/setSuggestions') {
    return { ...state, data: payload }
  } else if (type === 'loading/setLoading') {
    return {...state, loading: payload}
  }
  return state
}
  
export default suggestionsReducer
  