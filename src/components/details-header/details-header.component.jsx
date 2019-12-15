import React from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment'

import './details-header.style.scss'

const FilterSection = ({ current }) => {
  const { text, active, date } = current;
  return (
    <div className="details-header">
      <div className="todo-details">
        <h2>{text}</h2>
        <Moment fromNow>{date}</Moment>
      </div>
      <div className="todo-stats">
        <p>1 Notes </p>
        <p>Status: <span>{active ? 'Active' : 'Completed'}</span> </p>
      </div>
    </div>
  )
};

const mapStateToProps = state => ({
  current: state.todo.current
})

export default connect(mapStateToProps)(FilterSection);