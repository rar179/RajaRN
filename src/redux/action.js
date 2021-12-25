export const SET_USER = 'SET_USER';
export const TOGGLE_LOADER = 'TOGGLE_LOADER';

export const setReduxUser = data => dispatch => {
  dispatch({
    type: SET_USER,
    payload: data,
  });
}

export const toggleLoader = status => dispatch => {
  dispatch({
    type: TOGGLE_LOADER,
    payload: status,
  });
}