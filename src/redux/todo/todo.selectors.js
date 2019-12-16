import { createSelector } from 'reselect';

// This section is for using Reselect - this library is for not rendering all the components again when a State is changed, instead, 
// it will only render the piece of state who has changed

const getTodo = state => state.todo;

export const selectCurrentNote = createSelector(
  [getTodo],
  todo => todo.currentNote
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