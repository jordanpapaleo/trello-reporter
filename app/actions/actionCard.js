export const CREATE_CARD = 'CREATE_CARD'
export const UPDATE_CARD = 'UPDATE_CARD'

export function createCard (newCard) {
  return (dispatch) => {
    Trello.post('/cards/', newCard,
      (card) => {
        dispatch({
          type: CREATE_CARD,
          payload: card
        })
      },
      (error) => {
        dispatch({
          type: CREATE_CARD,
          payload: error
        })
      }
    )
  }
}

export function updateCard (updatedCard) {
  return (dispatch) => {
    Trello.put(`/cards/${updatedCard.id}`, updatedCard,
      (card) => {
        dispatch({
          type: UPDATE_CARD,
          payload: card
        })
      },
      (error) => {
        dispatch({
          type: UPDATE_CARD,
          payload: error
        })
      }
    )
  }
}
