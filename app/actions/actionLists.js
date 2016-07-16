export const GET_LISTS = 'GET_LISTS'

export function getLists (boardId) {
  return (dispatch) => {
    Trello.get(`/boards/${boardId}/lists`,
      (lists) => {
        dispatch({
          type: GET_LISTS,
          payload: lists
        })
      },
      (error) => {
        dispatch({
          type: GET_LISTS,
          payload: error
        })
      }
    )
  }
}
