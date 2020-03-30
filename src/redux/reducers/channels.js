import {
  GET_CHANNELS,
  ADD_CHANNEL,
  GET_MESSAGES
} from "../actions/actionTypes";
const initialState = {
  channels: [],
  data: "",
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
        data: payload
      };
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
