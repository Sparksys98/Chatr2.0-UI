import { GET_CHANNELS, ADD_CHANNEL } from "../actions/actionTypes";
const initialState = {
  channels: [],
  data: ""
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
    default:
      return state;
  }
};
export default reducer;
