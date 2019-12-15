import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { setCurrent, deleteTodo, toggleTodo } from '../../redux/todo/todo.actions'
import { ReactComponent as CircleTodo } from '../../assets/circleTodo.svg'
import { ReactComponent as Cancel } from '../../assets/cancel.svg'

import './todo-item.style.scss';

const TodoItem = ({ toggleTodo, id, completed, text, history, setCurrent, deleteTodo }) => {
  const handleClick = () => {
    let todo = {
      id,
      text,
      completed
    }

    setCurrent(id);
    history.push('todo')
  }

  return (
    <div className={`todo-item ${completed ? 'completed' : ''}`}>
      <CircleTodo onClick={() => toggleTodo(id)} className="circle-todo" />
      <li onClick={handleClick} className="details-container">
        <span className={`${completed ? 'completed-text' : ''}`}>{text}</span>
      </li>
      <Cancel onClick={() => deleteTodo(id)} className="cancel-btn" />
    </div>
  )
}

TodoItem.propTypes = {
  toggleTodo: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  setCurrent: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
};

export default withRouter(connect(null, { setCurrent, deleteTodo, toggleTodo })(TodoItem));