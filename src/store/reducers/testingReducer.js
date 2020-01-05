import {
  GET_TEST_VARIANT_REQUESTS,
  GET_TEST_VARIANT_SUCCESS,
  GET_TEST_VARIANT_FAILURE
} from '../actions/defaultActions';

const initialState = {
  errorFetchingTestVariant: null,
  fetchingTestVariant: false,
  variant: {}
}

export default (state = initialState, action) => {
  switch(action.type) {
    case GET_TEST_VARIANT_REQUESTS:
      return {
        ...state, errorFetchingTestVariant: null, fetchingTestVariant: true
      }
    case GET_TEST_VARIANT_SUCCESS:
      return {
        ...state, fetchingTestVariant: false, variant: action.payload
      }
    case GET_TEST_VARIANT_FAILURE:
      return {
        ...state, errorFetchingTestVariant: action.payload, fetchingTestVariant: false
      }
    default:
      return state
  }
}