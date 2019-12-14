import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Todo from '../todo-item/todo-item';
import { getVisibleTodos } from '../../redux/todo/todo.utils';
import { toggleTodo } from '../../redux/todo/todo.actions';

const TodoList = ({ todos, toggleTodo }) => (
  <ul>
    {
      todos.map(todo =>
        <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
      )
    }
  </ul>
);

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todo, state.filter)
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
});

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  toggleTodo: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
