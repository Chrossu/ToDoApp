import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Todo from '../todo-item/todo-item.component';
import { getVisibleTodos } from '../../redux/todo/todo.utils';
import { toggleTodo } from '../../redux/todo/todo.actions';

import './todo-list.style.scss';

const TodoList = ({ todos, toggleTodo, filterType }) => {
//   const titleReturn = () => (
//     filterType === 'SHOW_ALL' && (<h4 className="warning-msg">You don't have tasks for today (as yet)</h4>)
//     filterType === 'ACTIVE' && (<h4 className="warning-msg">You don't have active tasks</h4>)
//   filterType === 'SHOW_COMPLETED' && (<h4 className="warning-msg">You have not completed tasks today (as yet)</h4>)
//   )

const titleReturn = filterType => {
  switch (filterType) {
    case 'SHOW_ALL':
      return <h4 className="warning-msg">You don't have tasks for today (as yet)</h4>
    case 'SHOW_ACTIVE':
      return <h4 className="warning-msg">You don't have active tasks</h4>
    case 'SHOW_COMPLETED':
      return <h4 className="warning-msg">You have not completed tasks today (as yet)</h4>
    default:   
      return <h4 className="warning-msg">You don't have tasks for todayaa (as yet)</h4>
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
            <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
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

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
});

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  filterType: PropTypes.string.isRequired,
  toggleTodo: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
