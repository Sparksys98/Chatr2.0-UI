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
  //Aziz, I know there are so many code issues in here and bad stuff, just ignore them for now, I will fix them tmw :D
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
    /*
     * The "No Messages" message should appear if there are no messages, not if one of the messages is empty.
     */
    const messages = this.props.messages.map(message => (
      <div className="border" key={message.id}>
        {message.length !== 0 ? (
          <div className="speech left">
            <ul
              className="list-group list-group-flush"
              style={{ listStyleType: "none" }}
            >
              <li className="text">
                {/* this */}
                {message.message.includes(this.checkURL) ? (
                  <img
                    src={message.message}
                    className="rounded mx-auto d-block"
                    alt="image not found"
                  ></img>
                ) : (
                  <ul
                    className="list-group list-group-flush"
                    style={{ listStyleType: "none" }}
                  >
                    <li className="text">
                      {message.username}: {message.message}
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
        ) : (
          <div className="border">
            <h2>No Messages...</h2>
          </div>
        )}
      </div>
    ));
    const { message } = this.state;

    // you could alternatively have a currentChannel in the reducer state that sets the current
    // channel when a ChannelNavLink is clicked.
    // Then you wont' need to do this .find() here.
    const channelImage = this.props.channels.find(
      channel => channel.id.toString() === this.props.match.params.ID
    );

    const Image = channelImage
      ? channelImage.image_url
      : "https://image.spreadshirtmedia.com/image-server/v1/compositions/T347A2PA2978PT17X144Y34D1016483822FS2321/views/1,width=650,height=650,appearanceId=2,backgroundColor=ffffff.jpg";
    return (
      <form onSubmit={this.messageSubmit}>
        <div>
          <h2>Owner is: {owner}</h2>
        </div>
        <img src={Image} className="rounded" width="100px" height="100px" />
        <div className="card">
          <div className="card-body">{messages}</div>
        </div>
        <div className="form-group ">
          <label htmlFor="message"></label>
          <input
            type="text"
            className="form-control"
            aria-label="Message"
            aria-describedby="inputGroup-sizing-default"
            {/* messages is a list of messages, it doesn't have an id, also you don't need an id for the input tag */}
            id={messages.id}
            value={message}
            name="message"
            placeholder="Send Message..."
            onChange={this.handleChange}
          />
          {/* this */}
          <button
            className="btn btn-outline-secondary"
            {/* I think if you make it type="submit" you won't need the onClick, since it'll trigger onSubmit for the form */}
            type="button"
            onClick={this.messageSubmit}
          >
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
    channels: state.channels.channels,
    messages: state.messages.currentChannelMessages
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getMessages: ID => dispatch(getMessages(ID)),
    sendMessages: (ID, userData) => dispatch(sendMessages(ID, userData))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
