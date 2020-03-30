import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { getMessages } from "../redux/actions";
import MessagesList from "./Navigation/MessagesList";
class ShowMessages extends Component {
  render() {
    const messages = this.props.channels.map(channel => (
      <MessagesList key={channel.name} channel={channel} />
    ));
    return (
      <div>
        <ul className="navbar-nav navbar-sidenav" id="exampleAccordion">
          {this.props.user ? (
            <>
              <li
                className="nav-item"
                data-toggle="tooltip"
                data-placement="right"
              ></li>
              <>{messages}</>
            </>
          ) : (
            <h1>YOU ARE NOT LOGGED IN!!</h1>
          )}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.user,
  channels: state.channels.channels
});
const mapDispatchToProps = dispatch => {
  return {
    getMessages: channel => dispatch(getMessages(channel))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ShowMessages);
