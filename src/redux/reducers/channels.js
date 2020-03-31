import { GET_CHANNELS, ADD_CHANNEL } from "../actions/actionTypes";

/**
 * You can simplify this state (and the way it's being used in all yout components)
 * by having the whole state be the array:
 *
 * const initialState = [];
 */

const initialState = {
  channels: []
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CHANNELS:
      return {
        ...state,
        channels: payload
      };
    case ADD_CHANNEL:
      return {
        ...state
      };
    default:
      return state;
  }
};
export default reducer;
