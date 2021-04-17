import { combineReducers } from 'redux'
import users from './usersReducer'
import transactions from './transactionsReducer'
import suggestions from './suggestionsReducer'

const reducer = combineReducers({
  users,
  transactions,
  suggestions
})

export default reducer
