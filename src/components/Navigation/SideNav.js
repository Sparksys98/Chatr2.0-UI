import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
// Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faPlusCircle
} from "@fortawesome/free-solid-svg-icons";

// Components
import ChannelNavLink from "./ChannelNavLink";

class SideNav extends React.Component {
  state = { collapsed: false };

  render() {
    const channelLinks = this.props.channels.map(channel => (
      <ChannelNavLink key={channel.name} channel={channel} />
    ));

    return (
      <div>
        <ul className="navbar-nav navbar-sidenav scroll" id="exampleAccordion">
          {this.props.user ? (
            <>
              <li
                className="nav-item"
                data-toggle="tooltip"
                data-placement="right"
              >
                <Link className="nav-link heading" to="/createChannel">
                  <span
                    className="nav-link-text mr-2"
                    style={{ fontFamily: "Lilita One" }}
                  >
                    Channels
                  </span>
                  <FontAwesomeIcon icon={faPlusCircle} />
                </Link>
              </li>
              <>{channelLinks}</>
            </>
          ) : (
            <li
              className="nav-item"
              data-toggle="tooltip"
              data-placement="right"
            ></li>
          )}
        </ul>
        <ul className="navbar-nav sidenav-toggler">
          <li className="nav-item">
            <span
              className="nav-link text-center"
              id="sidenavToggler"
              onClick={() =>
                this.setState(prevState => ({
                  collapsed: !prevState.collapsed
                }))
              }
            >
              <FontAwesomeIcon
                icon={this.state.collapsed ? faAngleRight : faAngleLeft}
              />
            </span>
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.user,
  channels: state.channels.channels
});

export default connect(mapStateToProps)(SideNav);
