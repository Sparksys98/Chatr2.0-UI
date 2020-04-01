import { GET_MESSAGES, SEND_MESSAGES } from "../actions/actionTypes";

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
    case SEND_MESSAGES:
      return {
        ...state,
        messages: [...state.currentChannelMessages, payload]
      };
    default:
      return state;
  }
};
export default reducer;
