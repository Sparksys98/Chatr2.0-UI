import instance from "./instance";
import { GET_MESSAGES, SEND_MESSAGES } from "./actionTypes";
export const getMessages = ID => {
  return async dispatch => {
    try {
      const res = await instance.get(`channels/${ID}`);
      const messages = res.data;
      dispatch({
        type: GET_MESSAGES,
        payload: messages
      });
    } catch (error) {
      console.error(error);
    }
  };
};

// change userData to message or messageObject
export const sendMessages = (ID, userData) => {
  return async dispatch => {
    try {
      const res = await instance.post(`channels/${ID}/send/`, userData);
      const messages = res.data;
      dispatch({
        type: SEND_MESSAGES,
        payload: messages
      });
    } catch (err) {
      console.error(err.response);
    }
  };
};
