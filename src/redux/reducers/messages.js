import { GET_MESSAGES } from "../actions/actionTypes";
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
