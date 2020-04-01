import axios from "axios"; // <-- "dead" import
import jwt_decode from "jwt-decode";
import instance from "./instance";
import { SET_CURRENT_USER, SET_ERRORS } from "./actionTypes";
import { getChannels } from "./channels";

export const checkForExpiredToken = () => {
  return dispatch => {
    const token = localStorage.getItem("token");

    if (token) {
      const currentTimeInSeconds = Date.now() / 1000;

      const user = jwt_decode(token);

      if (user.exp >= currentTimeInSeconds) {
        dispatch(setCurrentUser(token));
      } else {
        return logout();
      }
    }
  };
};

export const login = (userData, history) => {
  return async dispatch => {
    try {
      const res = await instance.post("login/", userData);
      const user = res.data;
      dispatch(setCurrentUser(user.token));
      history.replace("/private"); // <-- better place to redirect to?
    } catch (err) {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      });
    }
  };
};

export const signup = (userData, history) => {
  return async dispatch => {
    try {
      const res = await instance.post("login/", userData); // <-- did you know your "signup" is making a request to login?
      const user = res.data;
      dispatch(setCurrentUser(user.token));
      history.replace("/private"); // <-- better place to redirect to?
      dispatch({
        type: SET_ERRORS,
        payload: null
      });
    } catch (err) {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      });
    }
  };
};

const setCurrentUser = token => {
  return async dispatch => {
    let user = null;
    if (token) {
      localStorage.setItem("token", token);
      instance.defaults.headers.common.Authorization = `jwt ${token}`;
      user = jwt_decode(token);
      dispatch(getChannels());
    } else {
      localStorage.removeItem("token");
      delete instance.defaults.headers.common.Authorization;
      /**
       * You need to set the channels list back to empty here:
       *
       * dispatch({type: GET_CHANNELS, payload: []})
       */
    }
    dispatch({
      type: SET_CURRENT_USER,
      payload: user
    });
    dispatch({
      type: SET_ERRORS,
      payload: null
    });
  };
};

/**
 * ...check this out...
 */
export const logout = setCurrentUser;
