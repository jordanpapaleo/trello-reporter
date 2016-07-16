import { CREATE_CARD, UPDATE_CARD } from 'actions/actionCard'

export default function (previousState = {}, action) {
  switch (action.type) {
    case CREATE_CARD:
      return Object.assign({}, previousState.card, action.payload)
    case UPDATE_CARD:
      return Object.assign({}, previousState.card, action.payload)
    default:
      return previousState
  }
}
