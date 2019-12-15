import React from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { createStructuredSelector } from 'reselect';

import { selectCurrentTodo, selectNoteItemsCount } from '../../redux/todo/todo.selectors';

import './details-header.style.scss'

const FilterSection = ({ current, noteCount }) => {
  const { text, completed, date } = current;
  return (
    <div className="details-header">
      <div className="todo-details">
        <h2>{text}</h2>
        <Moment fromNow>{date}</Moment>
      </div>
      <div className="todo-stats">
        <p>{!noteCount ? '0 Notes' : `${noteCount} Notes`}</p>
        <p>Status: <span>{completed ? 'Completed' : 'Active'}</span> </p>
      </div>
    </div>
  )
};

const mapStateToProps = createStructuredSelector({
  current: selectCurrentTodo,
  noteCount: selectNoteItemsCount
})

export default connect(mapStateToProps)(FilterSection);