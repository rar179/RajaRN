import { SET_USER, TOGGLE_LOADER } from "./action";

const initialState = {
  userData: {},
  isLoading: false,
}

function userReducer(state = initialState, action) {
  switch(action.type) {
    case SET_USER:
      return { ...state , userData: action.payload };
    case TOGGLE_LOADER:
      return { ...state , isLoading: action.payload };
    default:
      return state;
  }
}

export default userReducer;