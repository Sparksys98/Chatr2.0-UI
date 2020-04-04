import { ADD_CHANNEL, GET_CHANNELS } from "./actionTypes";
import instance from "./instance";
import { setErrors } from "./errors";
export const getChannels = () => {
  return async dispatch => {
    try {
      const res = await instance.get("channels/");
      const channels = res.data;
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
      const res = await instance.post("channels/create/", userData);
      const channels = res.data;
      dispatch({ type: ADD_CHANNEL, payload: channels });
    } catch (err) {
      console.error(err.response);
      dispatch(setErrors(err));
    }
  };
};
