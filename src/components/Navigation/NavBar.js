import React from "react";
import { Link } from "react-router-dom";

// Components
import SideNav from "./SideNav";
import AuthButton from "./AuthButton";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => (
  <nav
    className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
    id="mainNav"
  >
    <Link className="navbar-brand" to="/channel">
      <FontAwesomeIcon icon={faHome} />
      Chat Online
    </Link>
    <button
      className="navbar-toggler navbar-toggler-right"
      type="button"
      data-toggle="collapse"
      data-target="#navbarResponsive"
      aria-controls="navbarResponsive"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarResponsive">
      <SideNav />
      <AuthButton />
    </div>
  </nav>
);

export default NavBar;
