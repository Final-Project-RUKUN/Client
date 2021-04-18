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
  const url = 'http://localhost:4000/suggestions'
  return (dispatch) => {
    dispatch(setLoading(true))
    axios({
      method: 'GET',
      url,
      headers: {
        access_token: localStorage.access_token
      }
    })
    .then(({data}) => {
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
    axios({
    url: 'http://localhost:4000/suggestions',
    method: 'POST',
    headers: {
      access_token: localStorage.access_token
    },
    data
  })
    .then(({data}) => {
      // console.log(data);
      dispatch(setSuggestionsAsync())
    })
    .catch(err => console.log(err))
    .finally(_ => {
      dispatch(setLoading(false))
    })
  }
}

export function getOneSuggestion(data) {
  const id = data.id
  return (dispatch) => {
    axios({
      url: `http://localhost:4000/suggestions/${id}`,
      method: 'GET',
      headers: {
        access_token: localStorage.access_token
      }
    })
    .then(({data}) => {
      dispatch(setOneSuggestions(data))
    })
    .catch(err => console.log(err))
  }
}

export function deleteSuggestion(data) {
  return (dispatch) => {
    axios({
      url: `http://localhost:4000/suggestions/${data}`,
      method: 'DELETE',
      headers: {
        access_token: localStorage.access_token
      }
    })
    .then(data => {
      dispatch(setSuggestionsAsync())
    })
    .catch(err => console.log(err))
  }
}