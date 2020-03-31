import { ADD_CHANNEL, GET_CHANNELS } from "./actionTypes";
import axios from "axios";
import { setErrors } from "./errors";
export const getChannels = () => {
  return async dispatch => {
    try {
      const res = await axios.get("https://api-chatr.herokuapp.com/channels/");
      const channels = res.data;
      console.log(channels);
      dispatch({
        type: GET_CHANNELS,
        payload: channels
      });
    } catch (error) {
      console.error(error);
      dispatch(setErrors(error));
    }
  };
};
export const createChannel = userData => {
  return async dispatch => {
    try {
      const res = await axios.post("channels/create/", userData);
      const channels = res.data;
      dispatch({ type: ADD_CHANNEL, payload: channels });
    } catch (err) {
      console.error(err.response);
      dispatch(setErrors(err));
    }
  };
};
