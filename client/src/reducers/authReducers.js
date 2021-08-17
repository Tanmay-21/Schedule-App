import { FETCH_CURRENT_USER, LOGOUT_CURRENT_USER } from "../constants/action-types";

export const authReducer = (state = null, action) => {
  console.log(action);
  switch (action.type) {
    case FETCH_CURRENT_USER:
      return action.payload || false;
    case LOGOUT_CURRENT_USER:
      return false;
    default:
      return state;
  }
}
