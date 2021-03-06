import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// Scripts
import main from "./assets/js/main";

// Components
import NavBar from "./components/Navigation/NavBar";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";
import RegistrationForm from "./components/RegistrationForm";
import SuperSecretPage from "./components/SuperSecretPage";
import LoginForm from "./components/LoginForm";
import Messages from "./components/Messages";
import CreateChannelForm from "./components/CreateChannelForm";
import Particles from "react-particles-js";
const particlesOptions = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 500
      }
    }
  }
};
class App extends Component {
  componentDidMount() {
    main();
  }

  render() {
    return (
      <div className="content-wrapper">
        <Particles className="particles" params={particlesOptions} />
        <NavBar />

        <Switch>
          <Route path="/channels/:ID?" component={Messages} />

          <Route path="/createChannel" component={CreateChannelForm} />
          <Route path="/welcome" component={Welcome} />
          <Route path="/signup" component={RegistrationForm} />
          <Route path="/login" component={LoginForm} />

          <Route path="/private" component={SuperSecretPage} />

          <Redirect to="/welcome" />
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default App;
