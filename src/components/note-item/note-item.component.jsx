import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { setCurrent } from '../../redux/todo/todo.actions'
import { ReactComponent as Edit } from '../../assets/edit.svg'
import { ReactComponent as Cancel } from '../../assets/cancel.svg'

import './note-item.style.scss';

const NoteItem = ({ notes, setCurrent }) => {
  const { id, note } = notes;

  return (
    <div className="note-item">
      <Edit className="edit-note" />
      <li className="details-container">
        {note}
      </li>
      <Cancel className="cancel-btn" />
    </div>
  )
}

const mapStateToProps = state => ({
  notes: state.todo.current.notes
})

NoteItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  setCurrent: PropTypes.func.isRequired
};

export default withRouter(connect(mapStateToProps, { setCurrent })(NoteItem));