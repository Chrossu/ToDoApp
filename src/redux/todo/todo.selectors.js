import { createSelector } from 'reselect';

const getTodo = state => state.todo;

export const selectTodoItems = createSelector(
  []
)

export const selectCurrentTodo = createSelector(
  [getTodo],
  todo => todo.current
)

export const selectCurrentTodoId = createSelector(
  [getTodo],
  todo => todo.current.id
)

export const selectNoteItems = createSelector(
  [selectCurrentTodo],
  todo => todo.notes
)

export const selectNoteItemsCount = createSelector(
  [selectCurrentTodo],
  todo => todo.notes ? todo.notes.length : 0
)