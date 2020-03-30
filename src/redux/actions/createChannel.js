import { ADD_CHANNEL } from "./actionTypes";
import axios from "axios";
import { setErrors } from "./errors";
export const createChannel = userData => {
  return async dispatch => {
    try {
      const res = await axios.post(
        "https://api-chatr.herokuapp.com/channels/create/",
        userData
      );
      const channels = res.data;
      dispatch({ type: ADD_CHANNEL, payload: channels });
    } catch (err) {
      console.error(err.response);
      dispatch(setErrors(err));
    }
  };
};
