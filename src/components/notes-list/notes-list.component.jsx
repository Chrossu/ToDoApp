import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

import NoteItem from '../note-item/note-item.component';
import { selectNoteItems } from '../../redux/todo/todo.selectors';

import './notes-list.style.scss';

const NotesList = ({ notes }) => (
  <div className="notes-list">
    <h4 className="title">Notes</h4>
    {notes && notes.length === 0 && <h3 className="empty-message">This task does not have notes</h3>}
    <div className="notes-list-container">
      {
        notes ? notes.map(note =>
          <NoteItem key={note.id} {...note} notesLength={notes && notes.length} /> )
          :
          <h4 className="empty-message">This task does not have notes</h4>
      }
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  notes: selectNoteItems
});

NotesList.propTypes = {
  notes: PropTypes.array
};

export default connect(mapStateToProps, { selectNoteItems })(NotesList);