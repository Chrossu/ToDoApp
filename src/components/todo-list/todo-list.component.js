import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Todo from '../todo-item/todo-item.component';
import { getVisibleTodos } from '../../redux/todo/todo.utils';

import './todo-list.style.scss';

const TodoList = ({ todos, filterType }) => {
  const titleReturn = filterType => {
    switch (filterType) {
      case 'SHOW_ALL':
        return <h4 className="warning-msg">You don't have tasks for today (as yet)</h4>
      case 'SHOW_ACTIVE':
        return <h4 className="warning-msg">You don't have active tasks</h4>
      case 'SHOW_COMPLETED':
        return <h4 className="warning-msg">You have not completed tasks today (as yet)</h4>
      default:
        return <h4 className="warning-msg">You don't have tasks for today (as yet)</h4>
    }
  }

  return (
    <div className="todo-list">
      <h4 className="title">Daily Tasks</h4>
      {todos.length === 0 ?
        titleReturn(filterType)
        :
        <div className="todo-list-container">
          {
            todos.map(todo =>
              <Todo key={todo.id} {...todo} />
            )
          }
        </div>
      }
    </div>
  )
};

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todo.todos, state.filter),
  filterType: state.filter
});

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  filterType: PropTypes.string.isRequired
};

export default connect(mapStateToProps)(TodoList);
