import { ADD_TODO, TOGGLE_TODO, SET_CURRENT, DELETE_TODO, ADD_NOTE, GET_NOTES } from './todo.types';

export const addTodo = todo => ({
  type: ADD_TODO,
  payload: todo
})

export const setCurrent = id => ({
  type: SET_CURRENT,
  payload: id
})

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
})

export const deleteTodo = id => ({
  type: DELETE_TODO,
  payload: id
})

export const getNotes = id => ({
  type: GET_NOTES,
  payload: id
})

export const addNote = (id, note) => ({
  type: ADD_NOTE,
  id,
  payload: note
})