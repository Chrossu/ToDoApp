import { ADD_TODO, TOGGLE_TODO } from './todo.types'

const initialState = {
  todos: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: action.payload, ...state.todos
      }
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          (todo.id === action.id) ?
            { ...todo, completed: !todo.completed }
            :
            todo
        )
      }
    default:
      return state
  }
}
