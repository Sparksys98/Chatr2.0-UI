import React, { Component } from "react";
import { getMessages } from "../redux/actions";
import { connect } from "react-redux";

class Messages extends Component {
  componentDidMount() {
    this.props.getMessages(this.props.match.params.ID);
  }
  componentDidUpdate(oldProps) {
    if (this.props.match.params.ID !== oldProps.match.params.ID)
      this.props.getMessages(this.props.match.params.ID);
  }
  render() {
    const messages = this.props.messages.map(message => (
      <div className="card bg-dark" key={message.id}>
        <div className="card-body mb-0 bg-primary">
          <ul className="list-group list-group-flush">
            <li className="text">
              {message.username}: {message.message}
            </li>
          </ul>
        </div>
      </div>
    ));

    return (
      <div className="card">
        <div className="card-body">{messages}</div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    user: state.user.user,
    channels: state.channels.channels,
    messages: state.messages.currentChannelMessages
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getMessages: ID => dispatch(getMessages(ID))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
