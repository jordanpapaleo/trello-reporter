import { GET_BOARDS } from 'actions/actionBoards'

export default function (previousState = [], action) {
  switch (action.type) {
    case GET_BOARDS:
      return [...action.payload]
    default:
      return previousState
  }
}
