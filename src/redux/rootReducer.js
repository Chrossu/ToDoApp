import { combineReducers } from 'redux'
import todosReducer from './todo/todo.reducer'
import visibilityFilterReducer from './filter/filter.reducer'

export default combineReducers({
  todo: todosReducer,
  filter: visibilityFilterReducer
})
