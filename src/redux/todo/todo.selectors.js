import { createSelector } from 'reselect';

const selectTodo = state => state.todo;

export const selectTodoItems = createSelector(
  []
)

export const selectCurrentTodo = createSelector(
  [selectTodo],
  todo => todo.current
)

export const selectNoteItems = createSelector(
  [selectCurrentTodo],
  todo => todo.notes
)

export const selectNoteItemsCount = createSelector(
  [selectCurrentTodo],
  todo => todo.notes ? todo.notes.length : 0
)