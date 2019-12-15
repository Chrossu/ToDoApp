import React, { useState } from 'react'
import uuid from 'uuid';
import { connect } from 'react-redux'

import { addNote } from '../../redux/todo/todo.actions'
import { ReactComponent as AddButton } from '../../assets/add-button.svg'
import './note-add.style.scss';

const TodoAdd = ({ current, dispatch }) => {
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

      dispatch(addNote(current.id, newNote))

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

const mapStateToProps = state => ({
  current: state.todo.current
})

export default connect(mapStateToProps)(TodoAdd)
