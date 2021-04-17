export function setSuggestions(payload) {
  return { type: 'suggestions/setSuggestions', payload }
}

export function setLoading (payload) {
  return {type : 'loading/setLoading', payload}
}
  
export function setSuggestionsAsync() {
  const url = 'http://localhost:3003/suggestions'
  
  return (dispatch) => {
    dispatch(setLoading(true))
    fetch(url)
    .then(res => res.json())
    .then(data => {
      dispatch(setSuggestions(data))
    })
    .catch(err => console.log(err))
    .finally(_ => {
      dispatch(setLoading(false))
    })
  }
}

export function newSuggestion (data) {
  return(dispatch) => {
    dispatch(setLoading(true))
    fetch('http://localhost:3003/suggestions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data)
    })
      .then(data => setSuggestionsAsync())
      .catch(err => console.log(err))
  }
}