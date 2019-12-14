import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Todo from '../todo-item/todo-item.component';
import { getVisibleTodos } from '../../redux/todo/todo.utils';
import { toggleTodo } from '../../redux/todo/todo.actions';

import './todo-list.style.scss';

const TodoList = ({ todos, toggleTodo }) => (
  <div className="todo-list">
    <h3 className="title" onClick={() => window.location.reload()}>Daily Tasks</h3>
    <ul>
      {
        todos.map(todo =>
          <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
        )
      }
    </ul>
  </div>
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
