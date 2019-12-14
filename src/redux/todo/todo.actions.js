import { ADD_TODO, TOGGLE_TODO } from './todo.types';

export const addTodo = task => ({
  type: ADD_TODO,
  payload: task
})

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
})