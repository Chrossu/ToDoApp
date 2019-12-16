import React, { useState, useEffect } from 'react'
import uuid from 'uuid';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux'

import { addNote, setCurrent, updateNote, resetNote } from '../../redux/todo/todo.actions'
import { selectCurrentTodoId, selectCurrentNote, selectCurrentTodo } from '../../redux/todo/todo.selectors'
import { ReactComponent as AddButton } from '../../assets/add-button.svg'
import { ReactComponent as EditButton } from '../../assets/edit.svg'
import './note-add.style.scss';

const TodoAdd = ({ currentId, addNote, setCurrent, currentNote, updateNote, resetNote }) => {
  const [note, setNote] = useState('');

  useEffect(() => {
    if (currentNote !== null) setNote(currentNote.note)
  }, [currentNote])

  const handleAddNote = e => {
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

  const handleUpdateNote = e => {
    e.preventDefault();

    if (note === '') {
      return;
    } else {
      updateNote(currentId, { id: currentNote.id, note: note });
      setCurrent(currentId);
      resetNote();
      setNote('');

    }
  }

  return (
    <div className="note-add">
      <div className="form">
        <input
          type="text"
          name="note"
          value={note}
          placeholder="Add a Note to this Task"
          onChange={e => setNote(e.target.value)}
        />
        {currentNote ? 
        <EditButton onClick={handleUpdateNote} className="edit-btn" />
        :
        <AddButton onClick={handleAddNote} className="add-btn" />}
        
      </div>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  currentId: selectCurrentTodoId,
  currentNote: selectCurrentNote,
  selectCurrentTodo
})

export default connect(mapStateToProps, { addNote, setCurrent, updateNote, resetNote, selectCurrentTodo })(TodoAdd)
