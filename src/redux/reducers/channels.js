import { GET_CHANNELS, ADD_CHANNEL } from "../actions/actionTypes";

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
      // this isn't doing anything. either don't dispatch it and remove it,
      // or make it add the payload to the list of channels
      return {
        ...state,
        channels: [payload, ...state.channels]
      };
    default:
      return state;
  }
};
export default reducer;
