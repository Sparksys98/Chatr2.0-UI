import {
  GET_CHANNELS,
  ADD_CHANNEL,
  GET_MESSAGES
} from "../actions/actionTypes";
const initialState = {
  channels: [],
  data: "", // <--- what is this for?
  messages: []
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
        ...state,
        data: payload // <--- wai?
      };

    /**
     * Consider having a separate reducer just for messages
     */
    case GET_MESSAGES:
      return {
        ...state,
        messages: payload
      };
    default:
      return state;
  }
};
export default reducer;
