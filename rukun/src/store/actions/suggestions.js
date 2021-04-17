import axios from 'axios'

export function setSuggestions(payload) {
  return { type: 'suggestions/setSuggestions', payload }
}

export function setOneSuggestions(payload) {
  return { type: 'suggestions/setOneSuggestions', payload }
}

export function setLoading (payload) {
  return {type : 'loading/setLoading', payload}
}
  
export function setSuggestionsAsync() {
  const url = 'http://localhost:4000/suggestion'
  
  return (dispatch) => {
    dispatch(setLoading(true))
    // fetch(url)
    // .then(res => res.json())
    // .then(data => {
    //   dispatch(setSuggestions(data))
    // })
    // .catch(err => console.log(err))
    axios({
      method: 'GET',
      url,
      headers: {
        access_token: localStorage.access_token
      }
    })
      .then(({data}) => {
        dispatch(setSuggestions(data.Suggestions))
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
      .finally(_ => {
        dispatch(setLoading(false))
      })
  }
}

export function getOneSuggestion(data) {
  const id = data.id
  return (dispatch) => {
    fetch(`http://localhost:3003/suggestions/${id}`)
    .then(res => res.json())
    .then(data => {
      // console.log(data, 'action');
      dispatch(setOneSuggestions(data))
    })
    .catch(err => console.log(err))

  }
}