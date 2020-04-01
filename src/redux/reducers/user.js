import { SET_CURRENT_USER } from "../actions/actionTypes";

/**
 * You can simplify this state (and the way it's being used in all yout components)
 * by having the whole state be the user object:
 *
 * const initialState = null;
 */

const initialState = {
  user: null
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        user: payload,
        errors: null // <-- ?
      };
    default:
      return state;
  }
};

export default reducer;
