import { ADD_TODO, TOGGLE_TODO, SET_CURRENT, ADD_NOTE, DELETE_TODO } from './todo.types';

export const addTodo = task => ({
  type: ADD_TODO,
  payload: task
})

export const addNote = (id, note) => ({
  type: ADD_NOTE,
  id,
  payload: note
})

export const setCurrent = task => ({
  type: SET_CURRENT,
  payload: task
})

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
})

export const deleteTodo = id => ({
  type: DELETE_TODO,
  payload: id
})