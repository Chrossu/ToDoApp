import { SET_VISIBILITY_FILTER } from '../filter/filter.types'

const initialState = {
  filter: null
}

const visibilityFilter = (state = initialState, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return {
        ...state,
        filter: action.payload
      }
    default:
      return state
  }
}

export default visibilityFilter;