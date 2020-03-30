import axios from "axios";
import { GET_MESSAGES } from "./actionTypes";

import { setErrors } from "./errors";
export const getMessages = channel => {
  return async dispatch => {
    try {
      const res = await axios.get(
        `https://api-chatr.herokuapp.com/channels/${channel.id}`
      );
      const messages = res.data;
      if (
        !messages.some(
          newMessage =>
            !!channel.messages.find(
              originalMessage => newMessage.id === originalMessage.id
            )
        )
      ) {
        channel.messages = channel.messages.concat(messages);
        dispatch({
          type: GET_MESSAGES,
          payload: messages
        });
      }
    } catch (error) {
      console.error(error);
      dispatch(setErrors(error));
    }
  };
};

/**
 * Don't push "dead" code...especially not "stolen" dead code
 */

// export const fetchMessages = channel => async dispatch => {
//   const timestamp = channel.messages.length
//     ? channel.messages[channel.messages.length - 1].timestamp
//     : "";

//   try {
//     const res = await instance.get(
//       `/channels/${channel.id}/?latest=${timestamp}`
//     );
//     const messages = res.data;
//     if (
//       !messages.some(
//         newMessage =>
//           !!channel.messages.find(
//             originalMessage => newMessage.id === originalMessage.id
//           )
//       )
//     ) {
//       channel.messages = channel.messages.concat(messages);
//       dispatch({
//         type: FETCH_MESSAGES
//       });
//     }
//   } catch (error) {
//     console.error(error);
//   }
// };
