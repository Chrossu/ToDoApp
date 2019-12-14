import React, { useState } from 'react'
import uuid from 'uuid';
import { connect } from 'react-redux'

import { addTodo } from '../../redux/todo/todo.actions'
import { ReactComponent as AddButton } from '../../assets/add-button.svg'
import './comment-add.style.scss';

const TodoAdd = ({ dispatch }) => {
  const [task, setTask] = useState('');

  const onSubmit = e => {
    e.preventDefault()

    if (task === '') {
      return;
    } else {
      const newTask = {
        id: uuid.v4(),
        text: task,
        completed: false
      }
      dispatch(addTodo(newTask))

      // Clear form after dispatch
      setTask('');
    }

  }

  return (
    <div className="todo-add">
      <div className="form">
        <input type="text" name="task" value={task} onChange={e => setTask(e.target.value)} />
        <AddButton onClick={onSubmit} className="add-btn" />
      </div>
    </div>
  )
}

export default connect()(TodoAdd)
