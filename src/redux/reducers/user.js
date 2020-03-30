import { SET_CURRENT_USER, SET_ERRORS } from "../actions/actionTypes";

const initialState = {
  user: null,
  errors: null // <-- you're not using this. Get rid of it.
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        user: payload,
        errors: null
      };
    default:
      return state;

    /**
     * You already have an errors reducer that you're using. This is redundant
     */
    case SET_ERRORS:
      return {
        ...state,
        error: payload
      };
  }
};

export default reducer;
