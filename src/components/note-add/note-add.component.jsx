import React, { useState } from 'react'
import uuid from 'uuid';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux'

import { addNote, setCurrent } from '../../redux/todo/todo.actions'
import { selectCurrentTodoId } from '../../redux/todo/todo.selectors'
import { ReactComponent as AddButton } from '../../assets/add-button.svg'
import './note-add.style.scss';

const TodoAdd = ({ currentId, addNote, setCurrent }) => {
  const [note, setNote] = useState('');

  const onSubmit = e => {
    e.preventDefault()

    if (note === '') {
      return;
    } else {
      const newNote = {
        id: uuid.v4(),
        note
      }

      addNote(currentId, newNote)
      setCurrent(currentId);
      // Clear form after dispatch
      setNote('');
    }
  }

  return (
    <div className="note-add">
      <div className="form">
        <input type="text" name="note" value={note} placeholder="Add a Note to this Task" onChange={e => setNote(e.target.value)} />
        <AddButton onClick={onSubmit} className="add-btn" />
      </div>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  currentId: selectCurrentTodoId
})

export default connect(mapStateToProps, { addNote, setCurrent })(TodoAdd)
