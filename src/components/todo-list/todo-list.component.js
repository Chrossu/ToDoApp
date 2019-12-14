import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Todo from '../todo-item/todo-item.component';
import { getVisibleTodos } from '../../redux/todo/todo.utils';
import { toggleTodo } from '../../redux/todo/todo.actions';

import './todo-list.style.scss';

const TodoList = ({ todos, toggleTodo }) => (
  <div className="todo-list">
    <h4 className="title">Daily Tasks</h4>
    <div className="todo-list-container">
      {
        todos.map(todo =>
          <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
        )
      }
    </div>
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
