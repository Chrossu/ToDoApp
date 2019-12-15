import { GET_NOTES, ADD_NOTE, EDIT_NOTE, REMOVE_NOTE } from './notes.types'

export const getNotes = id => ({
  type: GET_NOTES,
  payload: id
})