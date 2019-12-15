import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

import { setCurrent, removeNote } from '../../redux/todo/todo.actions'
import { selectCurrentTodoId } from '../../redux/todo/todo.selectors';
import { ReactComponent as Edit } from '../../assets/edit.svg'
import { ReactComponent as Cancel } from '../../assets/cancel.svg'

import './note-item.style.scss';

const NoteItem = ({ id, note, removeNote, currentId, setCurrent }) => {
  const onClick = (currentId, id) => {
    removeNote(currentId, id);
    setCurrent(currentId);    
  }

  return (
    <div className="note-item">
      <Edit className="edit-note" />
      <li className="details-container">
        <p>{note}</p>
      </li>
      <Cancel onClick={() => onClick(currentId, id)} className="cancel-btn" />
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  currentId: selectCurrentTodoId
})

NoteItem.propTypes = {
  setCurrent: PropTypes.func.isRequired,
  removeNote: PropTypes.func.isRequired
};

export default withRouter(connect(mapStateToProps, { setCurrent, removeNote })(NoteItem));