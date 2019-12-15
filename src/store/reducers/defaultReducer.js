import {
  GET_LINK_FAILURE,
  GET_LINK_REQUEST,
  GET_LINK_SUCCESS
} from '../actions/defaultActions';

const initialState = {
  error: null,
  fetching: false,
  link: 'Learn React'
}

export default (state = initialState, action) => {
  switch(action.type) {
    case GET_LINK_FAILURE:
      return {
        ...state, error: action.payload, fetching: false
      }
    case GET_LINK_REQUEST:
      return {
        ...state, error: null, fetching: true
      }
    case GET_LINK_SUCCESS:
      return {
        ...state, link: action.payload, fetching: false
      }
    default:
      return state
  }
}