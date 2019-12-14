import { connect } from 'react-redux'

import { setVisibilityFilter } from '../redux/filter/filter.actions'
import Link from '../components/Link'

const mapStateToProps = (state, ownProps) => ({
  isActive: ownProps.filter === state.filter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  setFilter: () => dispatch(setVisibilityFilter(ownProps.filter))
})

export default connect(mapStateToProps, mapDispatchToProps)(Link);