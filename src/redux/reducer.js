import { SET_USER } from "./action";

const initialState = {
  userData: {},
}

function userReducer(state = initialState, action) {
  switch(action.type) {
    case SET_USER:
      return { ...state , userData: action.payload };
    default:
      return state;
  }
}

export default userReducer;