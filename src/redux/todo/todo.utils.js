import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from './todo.types';

export const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case SHOW_ALL:
      return todos
    case SHOW_COMPLETED:
      return todos.filter(todo => todo.completed)
    case SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
};

export const addNote = (todos, paramTodoId, noteToAdd) => {
  const todoExists = todos.find(task => task.id === paramTodoId);

  if (todoExists) {
    return todos.map(todo =>
      todo.id === paramTodoId ?
        {...todo, notes: todo.notes ? [...todo.notes, noteToAdd] : [noteToAdd] }
        :
        todo
    )
  }
}

export const removeNote = (todos, paramTodoId, noteId) => {
  const todoExists = todos.find(todo => todo.id === paramTodoId);

  if (todoExists) {
    return todos.map(todo =>
      todo.id === paramTodoId ?
        {...todo, notes: todo.notes.filter(note => note.id !== noteId) }
        :
        todo
    )
  }
}

export const countNotes = (todos, paramTodoId) => {
  const todoExists = todos.find(todo => todo.id === paramTodoId);

  if (todoExists) {
    return todoExists.notes.length()
  }
}

export const setCurrentTodo = (todos, paramTodoId) => {
  return todos.find(task => task.id === paramTodoId);
}

export const getNotesFromTodo = (todos, todoId) => {
  const todoExists = todos.find(todo => todo.id === todoId);

  if(todoExists) {
    return todoExists.notes;
  }
}