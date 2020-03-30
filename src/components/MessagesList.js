import React from "react";

/**
 * Don't commit incomplete code into master
 */
const MessagesList = ({ messages }) => (
  <li
    className="nav-item"
    data-toggle="tooltip"
    data-placement="right"
    // title={channel.name}
  >
    test
    <span className="nav-link-text"> {messages.username}</span>
    {/* <span className="nav-link-text"> {channel.message}</span>
    <span className="nav-link-text"> {channel.timestamp}</span> */}
  </li>
);

export default MessagesList;
