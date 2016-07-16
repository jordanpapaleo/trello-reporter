export const GET_BOARDS = 'GET_BOARDS'

export function getBoards () {
  return (dispatch) => {
    Trello.get('/member/me/boards',
      (boards) => {
        dispatch({
          type: GET_BOARDS,
          payload: boards
        })
      },
      (error) => {
        dispatch({
          type: GET_BOARDS,
          payload: error
        })
      }
    )
  }
}
