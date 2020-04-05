import React, { Component } from "react";
import { connect } from "react-redux";
class ShowMessages extends Component {
  render() {
    return this.props.messages.map((message) => (
      <div key={message.id} id="container">
        <div id="chatWindow">
          <ul
            className="list-group list-group-flush"
            style={{ listStyleType: "none" }}
          >
            {this.props.user.username === message.username ? (
              <li className="text">
                <div className="chat-bubble-user">{message.message}</div>
              </li>
            ) : (
              <li className="text">
                <div className="chat-bubble">
                  {message.username}: {message.message}
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
    ));
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    messages: state.messages.currentChannelMessages,
  };
};

export default connect(mapStateToProps)(ShowMessages);
