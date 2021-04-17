import { combineReducers } from 'redux'
import users from './usersReducer'
import transactions from './transactionsReducer'

const reducer = combineReducers({
  users,
  transactions
})

export default reducer
