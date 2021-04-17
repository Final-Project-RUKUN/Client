import { combineReducers } from 'redux'
import users from './usersReducer'
import transactions from './transactionsReducer'
import suggestions from './suggestionsReducer'
import admin from './adminReducer'

const reducer = combineReducers({
  users,
  transactions,
  suggestions,
  admin
})

export default reducer
