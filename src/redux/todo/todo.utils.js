export const addNote = (todos, paramTodoId, noteToAdd) => {
  const todoExists = todos.find(task => task.id === paramTodoId);

  if (todoExists) {
    return todos.map(todo =>
      todo.id === paramTodoId ?
        { ...todo, notes: todo.notes ? [...todo.notes, noteToAdd] : [noteToAdd] }
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
        { ...todo, notes: todo.notes.filter(note => note.id !== noteId) }
        :
        todo
    )
  }
}

export const setCurrentTodo = (todos, paramTodoId) => {
  return todos.find(task => task.id === paramTodoId);
}

export const updateNote = (todos, todoId, newNote) => {
  return todos.map(todo =>
    todo.id === todoId ? {...todo, notes: todo.notes.map(item =>
        item.id === newNote.id ? newNote : item
      )}
    :
    todo  
  )
}