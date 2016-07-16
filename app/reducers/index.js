import { combineReducers } from 'redux'
import boards from './reducerBoards'
import card from './reducerCard'
import cards from './reducerCards'
import lists from './reducerLists'

export default combineReducers({
  boards,
  card,
  lists,
  cards
})
