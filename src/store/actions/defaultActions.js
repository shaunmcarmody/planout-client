export const GET_TEST_VARIANT_REQUESTS = 'GET_TEST_VARIANT_REQUESTS';
export const GET_TEST_VARIANT_SUCCESS = 'GET_TEST_VARIANT_SUCCESS';
export const GET_TEST_VARIANT_FAILURE = 'GET_TEST_VARIANT_FAILURE';

export const getTestVariant = () => async dispatch => {
  try {
    dispatch({ type: GET_TEST_VARIANT_REQUESTS })
    dispatch({ type: GET_TEST_VARIANT_SUCCESS, payload: {} })
  } catch (error) {
    dispatch({ type: GET_TEST_VARIANT_FAILURE, payload: error.data.message  })
  }
}