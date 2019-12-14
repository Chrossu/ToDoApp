import React from 'react'
import PropTypes from 'prop-types'

const Link = ({ isActive, children, setFilter }) => (
    <button onClick={setFilter} disabled={isActive}>
      {children}
    </button>
)

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link
