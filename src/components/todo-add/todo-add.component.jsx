import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../redux/todo/todo.actions'
import uuid from 'uuid';

const AddTodo = ({ dispatch }) => {
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
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" name="task" value={task} onChange={e => setTask(e.target.value)} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}

export default connect()(AddTodo)
