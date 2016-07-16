import { GET_LISTS } from 'actions/actionLists'

export default function (previousState = [], action) {
  switch (action.type) {
    case GET_LISTS:
      return [...action.payload]
    default:
      return previousState
  }
}
