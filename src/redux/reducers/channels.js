import { GET_CHANNELS } from "../actions/actionTypes";
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
    default:
      return state;
  }
};
export default reducer;
