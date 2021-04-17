const initialState = {
    data: []
  }
  
  function usersReducer(state = initialState, action) {
    const { type, payload } = action
    if(type === 'users/setUsers') {
        return { ...state, data: payload }
    } 
    return state
  }
  
  export default usersReducer
  