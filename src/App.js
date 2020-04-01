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
import ChannelPlatform from "./components/ChannelPlatform";
class App extends Component {
  componentDidMount() {
    main();
  }

  render() {
    return (
      <div className="content-wrapper">
        <NavBar />
        <Switch>
          {/* NO CHEATING - it's better UX to have the channel name in url than the ID */}
          <Route path="/channels/:ID?" component={Messages} />

          <Route path="/createChannel" component={CreateChannelForm} />
          <Route path="/welcome" component={Welcome} />
          <Route path="/signup" component={RegistrationForm} />
          <Route path="/login" component={LoginForm} />

          {/* I don't think you need the `private` route anymore - there are better places to redirect to */}
          <Route path="/private" component={SuperSecretPage} />

          {/* what is this route? */}
          <Route path="/channel" />

          <Redirect to="/welcome" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
