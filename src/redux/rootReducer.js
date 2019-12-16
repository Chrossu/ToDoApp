import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import todosReducer from './todo/todo.reducer'
import visibilityFilterReducer from './filter/filter.reducer'

const persistConfig = {
  key: 'root',
  storage
}

const rootReducer = combineReducers({
  todo: todosReducer,
  filter: visibilityFilterReducer
})

export default persistReducer(persistConfig, rootReducer);