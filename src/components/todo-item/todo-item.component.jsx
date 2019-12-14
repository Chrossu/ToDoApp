import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as CircleTodo } from '../../assets/circleTodo.svg'

import './todo-item.style.scss';

const TodoItem = ({ onClick, completed, text }) => (
  <div className={`todo-item ${completed ? 'completed' : ''}`}>
      <CircleTodo onClick={onClick} className="circle-todo" />
      <li>
        {text}
      </li>
  </div>
)

TodoItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default TodoItem;