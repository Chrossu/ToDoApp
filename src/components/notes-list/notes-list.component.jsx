import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import NoteItem from '../note-item/note-item.component';
import { getNotesFromTodo } from '../../redux/todo/todo.utils';

import './notes-list.style.scss';

const NotesList = ({ notes, todos }) => (
  <div className="notes-list">
    <h4 className="title">Notes</h4>
    <div className="notes-list-container">
      {
        notes ? notes.map(note =>
          <NoteItem key={note.id} {...note} /> )
          :
          <h1>Miau</h1>
      }
    </div>
  </div>
);

const mapStateToProps = state => ({
  todos: state.todo.todos,
  notes: state.todo.current.notes
});

NotesList.propTypes = {
  notes: PropTypes.array
};

export default connect(mapStateToProps)(NotesList);