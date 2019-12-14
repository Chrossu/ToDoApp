import { connect } from 'react-redux';
import { toggleTodo } from '../redux/todo/todo.actions';
import TodoList from '../components/todos-overview/todos-overview.component';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../redux/filter/filter.types';

const getVisibleTodos = (todos, filter) => {
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

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todo, state.filter)
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
});

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);
