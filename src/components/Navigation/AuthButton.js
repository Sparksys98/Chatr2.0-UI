import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../../redux/actions";
// Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignOutAlt,
  faSignInAlt,
  faUserPlus
} from "@fortawesome/free-solid-svg-icons";

const AuthButton = ({ user, logout }) => {
  let buttons = [
    <li
      key="loginButton"
      className="nav-item"
      style={{ fontFamily: "Lilita One" }}
    >
      <Link to="/login" className="nav-link">
        <FontAwesomeIcon icon={faSignInAlt} /> Login
      </Link>
    </li>,
    <li
      key="signupButton"
      className="nav-item"
      style={{ fontFamily: "Lilita One" }}
    >
      <Link to="/signup" className="nav-link">
        <FontAwesomeIcon icon={faUserPlus} /> Signup
      </Link>
    </li>
  ];

  if (user) {
    buttons = (
      <>
        <li className="nav-item">
          <span className="nav-link" style={{ fontFamily: "Lilita One" }}>
            <Link to="/" className="nav-link" onClick={logout}>
              <FontAwesomeIcon icon={faSignOutAlt} /> Logout
              {"       "}
              {user.username}
            </Link>
          </span>
        </li>
      </>
    );
  }

  return <ul className="navbar-nav ml-auto">{buttons}</ul>;
};

const mapStateToProps = state => ({
  user: state.user.user
});

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(actionCreators.logout())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AuthButton);
