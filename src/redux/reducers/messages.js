import { GET_MESSAGES } from "../actions/actionTypes";

/**
 * You can simplify this state (and the way it's being used in all yout components)
 * by having the whole state be the array:
 *
 * const initialState = [];
 */

const initialState = {
  currentChannelMessages: []
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_MESSAGES:
      return {
        ...state,
        currentChannelMessages: payload
      };
    default:
      return state;
  }
};
export default reducer;
