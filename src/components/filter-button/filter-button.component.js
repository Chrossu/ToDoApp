import React from 'react';
import { connect } from 'react-redux'

import { setVisibilityFilter } from '../../redux/filter/filter.actions'

const FilterButton = ({ isActive, children, setFilter }) => (
  <button onClick={setFilter} disabled={isActive}>
    {children}
  </button>
)
const mapStateToProps = (state, ownProps) => ({
  isActive: ownProps.filter === state.filter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  setFilter: () => dispatch(setVisibilityFilter(ownProps.filter))
})

export default connect(mapStateToProps, mapDispatchToProps)(FilterButton);