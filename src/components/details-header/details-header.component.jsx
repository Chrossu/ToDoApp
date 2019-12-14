import React from 'react';
import { connect } from 'react-redux';

import './details-header.style.scss'

const FilterSection = ({ current }) => {

  return (
    <div className="details-header">
        <h4>{current.text}</h4>
      <h3>Todos Management</h3>
    </div>
  )
};

const mapStateToProps = state => ({
  current: state.todo.current
})

export default connect(mapStateToProps)(FilterSection);