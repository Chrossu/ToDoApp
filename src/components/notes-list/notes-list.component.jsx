import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Todo from '../todo-item/todo-item.component';
import { getVisibleTodos } from '../../redux/todo/todo.utils';
import { toggleTodo } from '../../redux/todo/todo.actions';

import './notes-list.style.scss';

const NotesList = ({ todos, toggleTodo }) => (
  <div className="comments-list">
    <h4 className="title">Notes</h4>
    <div className="comments-list-container">
      {
        todos.map(todo =>
          <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
        )
      }
    </div>
  </div>
);

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todo.todos, state.filter)
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
});

NotesList.propTypes = {
  todos: PropTypes.array.isRequired,
  toggleTodo: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(NotesList);