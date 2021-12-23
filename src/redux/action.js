export const SET_USER = 'SET_USER';

export const setReduxUser = data => dispatch => {
  dispatch({
    type: SET_USER,
    payload: data,
  });
}