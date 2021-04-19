const initialState = {
    data: [],
    currentUser: [{
      username: '',
      name: '',
      role: '',
    }]
  }
  
  function usersReducer(state = initialState, action) {
    const { type, payload } = action
    if(type === 'users/setUsers') {
        return { ...state, data: payload }
    } else if(type === 'currentUser/setCurrentUser') {
      return { ...state, currentUser: payload }
    } 
    return state
  }
  
  export default usersReducer
  