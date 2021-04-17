export function setSuggestions(payload) {
  return { type: 'suggestions/setSuggestions', payload }
}
  
export function setSuggestionsAsync() {
  const url = 'http://localhost:3003/suggestions'
  
  return (dispatch) => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        dispatch(setSuggestions(data))
      })
      .catch(err => console.log(err))
  }
}