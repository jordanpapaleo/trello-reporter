export const GET_CARDS = 'GET_CARDS'

export function getCards (listId) {
  return (dispatch) => {
    Trello.get(`/lists/${listId}/cards`,
      (cards) => {
        dispatch({
          type: GET_CARDS,
          payload: cards
        })
      },
      (error) => {
        dispatch({
          type: GET_CARDS,
          payload: error
        })
      }
    )
  }
}
