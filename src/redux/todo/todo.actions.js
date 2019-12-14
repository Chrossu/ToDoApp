import { ADD_TODO, TOGGLE_TODO, SET_CURRENT } from './todo.types';

export const addTodo = task => ({
  type: ADD_TODO,
  payload: task
})

export const setCurrent = task => ({
  type: SET_CURRENT,
  payload: task
})

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
})