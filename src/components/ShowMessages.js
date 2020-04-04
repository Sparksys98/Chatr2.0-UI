import React, { Component } from "react";
import { connect } from "react-redux";
class ShowMessages extends Component {
  render() {
    return this.props.messages.map((message) => (
      <div className="border" key={message.id}>
        <div className="speech ">
          <ul
            className="list-group list-group-flush"
            style={{ listStyleType: "none" }}
          >
            {this.props.user.username === message.username ? (
              <li className="text">
                <div className="right">
                  {message.username}: {message.message}
                </div>
              </li>
            ) : (
              <li className="text">
                <div className="left">
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
