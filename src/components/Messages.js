import React, { Component } from "react";
import { getMessages, sendMessages } from "../redux/actions";
import { connect } from "react-redux";
import InputEmoji from "react-input-emoji";
import ShowMessages from "./ShowMessages";
class Messages extends Component {
  setLiveMessagesInterval() {
    this.props.getMessages(this.props.match.params.ID);
    this.interval = setInterval(() => {
      this.props.getMessages(this.props.match.params.ID);
    }, 3500);
  }
  messageSubmit = (message) => {
    this.props.sendMessages(this.props.match.params.ID, { message });
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
      (channel) => channel.id.toString() === this.props.match.params.ID
    );
    // Ideally, you can have a page that isn't a channel, and redirect to it
    // if the channel isn't found.
    const owner = channel ? channel.owner : "";
    const channelImage = this.props.channels.find(
      (channel) => channel.id.toString() === this.props.match.params.ID
    );

    const Image =
      channelImage && channelImage.image_url
        ? channelImage.image_url
        : "https://image.spreadshirtmedia.com/image-server/v1/compositions/T347A2PA2978PT17X144Y34D1016483822FS2321/views/1,width=650,height=650,appearanceId=2,backgroundColor=ffffff.jpg";
    return (
      <div>
        <div>
          <h2>Owner is: {owner}</h2>
        </div>
        <img
          src={Image}
          className="rounded"
          width="100px"
          height="100px"
          alt=""
        />
        <div className="area">
          <ShowMessages />
        </div>
        <InputEmoji
          onEnter={this.messageSubmit}
          cleanOnEnter
          placeholder="Type a message"
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    channels: state.channels.channels,
    messages: state.messages.currentChannelMessages,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMessages: (ID) => dispatch(getMessages(ID)),
    sendMessages: (ID, Message) => dispatch(sendMessages(ID, Message)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
