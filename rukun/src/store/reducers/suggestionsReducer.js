const initialState = {
  data: []
}
  
function suggestionsReducer(state = initialState, action) {
  const { type, payload } = action
  if(type === 'suggestions/setSuggestions') {
    return { ...state, data: payload }
  } 
  return state
}
  
export default suggestionsReducer
  