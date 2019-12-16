import { createSelector } from 'reselect';

// This section is for using Reselect - this library is for not rendering all the components again when a State is changed, instead, 
// it will only render the piece of state who has changed

export const getVisibilityFilter = state => state.filter;
const getTodos = state => state.todo.todos;

export const selectVisibleTodos = createSelector(
  [getVisibilityFilter, getTodos],
  (visibilityFilter, todos) => {
    switch (visibilityFilter) {
      case 'SHOW_ALL':
        return todos;
      case 'SHOW_ACTIVE':
        return todos.filter(todo => !todo.completed)
      case 'SHOW_COMPLETED':
        return todos.filter(todo => todo.completed)
      default:
        return todos;
    }
  }
)
