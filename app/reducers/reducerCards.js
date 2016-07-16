import { GET_CARDS } from 'actions/actionCards'

export default function (previousState = [], action) {
  switch (action.type) {
    case GET_CARDS:
      return [...action.payload]
    default:
      return previousState
  }
}
