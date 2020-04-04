import React, { Component } from "react";
import { getMessages, sendMessages } from "../redux/actions";
import { connect } from "react-redux";
import InputEmoji from "react-input-emoji";
class Messages extends Component {
  state = {
    message: ""
  };
  setLiveMessagesInterval() {
    this.props.getMessages(this.props.match.params.ID);
    this.interval = setInterval(() => {
      this.props.getMessages(this.props.match.params.ID);
    }, 3500);
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  messageSubmit = event => {
    event.preventDefault();
    this.props.sendMessages(this.props.match.params.ID, this.state);
    this.setState({
      message: ""
    });
  };

  componentDidMount() {
    this.setLiveMessagesInterval();
  }
  componentDidUpdate(oldProps) {
    if (this.props.match.params.ID !== oldProps.match.params.ID) {
      clearInterval(this.interval);
      this.setLiveMessagesInterval();
    }
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  checkURL(url) {
    return url.match(/\.(jpeg|jpg|gif|png)$/) != null;
  }

  render() {
    const channel = this.props.channels.find(
      channel => channel.id.toString() === this.props.match.params.ID
    );
    // Ideally, you can have a page that isn't a channel, and redirect to it
    // if the channel isn't found.
    const owner = channel ? channel.owner : "";

    // put this JSX into a separate Message component.
    const messages = this.props.messages.map(message => (
      <div key={message.id} id="container">
        <div id="chatWindow">
          <ul
            className="list-group list-group-flush"
            style={{ listStyleType: "none" }}
          >
            {this.props.user.username === message.username ? (
              <li className="text">
                <div className="chat-bubble">
                  {message.username}: {message.message}
                </div>
              </li>
            ) : (
              <li className="text">
                <div className="chat-bubble-user">
                  {message.username}: {message.message}
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
    ));
    const { message } = this.state;

    // you could alternatively have a currentChannel in the reducer state that sets the current
    // channel when a ChannelNavLink is clicked.
    // Then you wont' need to do this .find() here.
    const channelImage = this.props.channels.find(
      channel => channel.id.toString() === this.props.match.params.ID
    );

    const Image =
      channelImage && channelImage.image_url
        ? channelImage.image_url
        : "https://image.spreadshirtmedia.com/image-server/v1/compositions/T347A2PA2978PT17X144Y34D1016483822FS2321/views/1,width=650,height=650,appearanceId=2,backgroundColor=ffffff.jpg";
    return (
      <form onSubmit={this.messageSubmit}>
        <div>
          <h2 className="rounded2">{owner}</h2>
        </div>
        <img
          src={Image}
          className="rounded"
          width="200px"
          height="200px"
          alt=""
        />
        <div className="area">{messages}</div>
        <div className="form-group ">
          <label htmlFor="message"></label>
          <input
            type="text"
            className="form-control"
            aria-label="Message"
            aria-describedby="inputGroup-sizing-default"
            value={message}
            name="message"
            placeholder="Send Message..."
            onChange={this.handleChange}
          />
          {/* this */}
          <button className="btn btn-outline-secondary" type="submit">
            Send
          </button>
          <InputEmoji
            value={message}
            onChange={this.handleChange}
            onEnter={this.messageSubmit}
            cleanOnEnter
            placeholder="Type a message"
          />
        </div>
      </form>
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
    getMessages: ID => dispatch(getMessages(ID)),
    sendMessages: (ID, Message) => dispatch(sendMessages(ID, Message))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
