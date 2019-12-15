export const GET_LINK_FAILURE = 'GET_LINK_FAILURE';
export const GET_LINK_REQUEST = 'GET_LINK_REQUEST';
export const GET_LINK_SUCCESS = 'GET_LINK_SUCCESS';

export const getLink = () => dispatch => {
  dispatch({ type: GET_LINK_REQUEST })
  if (true) {
    dispatch({ type: GET_LINK_SUCCESS, payload: 'Learn React' })
  } else {
    dispatch({ type: GET_LINK_FAILURE, payload: 'Error'  })
  }
}