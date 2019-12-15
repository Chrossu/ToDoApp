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

export const addNote = (tasks, paramTaskId, noteToAdd) => {
  const taskExists = tasks.find(task => task.id === paramTaskId);

  if (taskExists) {
    return tasks.map(task =>
      task.id === paramTaskId ?
        {...task, notes: task.notes ? [...task.notes, noteToAdd] : [noteToAdd] }
        :
        task
    )
  }
}