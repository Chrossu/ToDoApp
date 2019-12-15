import { ADD_TODO, TOGGLE_TODO, SET_CURRENT, ADD_NOTE, REMOVE_TODO, REMOVE_NOTE } from './todo.types';
import { addNote, setCurrentTodo, removeNote } from './todo.utils';

const initialState = {
  todos: [],
  current: null,
  currentNote: null
}

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }
    case SET_CURRENT:
      return {
        ...state,
        current: setCurrentTodo(state.todos, action.payload)
      }
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      }
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          (todo.id === action.id)
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      }
    case ADD_NOTE:
      return {
        ...state,
        todos: addNote(state.todos, action.id, action.payload)
      }
    case REMOVE_NOTE:
      return {
        ...state, 
        todos: removeNote(state.todos, action.todoId, action.noteId)
      }  
    default:
      return state
  }
}

export default todos

