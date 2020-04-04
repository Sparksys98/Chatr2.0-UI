import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signup } from "../redux/actions";
class RegistationForm extends Component {
  state = {
    username: "",
    password: ""
  };

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    this.props.signup(this.state, this.props.history);
  };

  render() {
    if (this.props.user) return <Redirect to="/channel" />; // <-- ?
    const { username, password } = this.state;
    return (
      <div className="my-6" style={{ fontFamily: "Lilita One" }}>
        <div className="container-fluid jumbotron bg-transparent my-5 text-center align-ceneter">
          <div className=" col-6 mx-auto my-5">
            <div className="card my-5">
              <div className="card-body">
                <form onSubmit={this.submitHandler}>
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      value={username}
                      name="username"
                      placeholder="Username"
                      onChange={this.changeHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      value={password}
                      name="password"
                      placeholder="Password"
                      onChange={this.changeHandler}
                    />
                    <p style={{ color: "red" }}>
                      {this.props.errors ? this.props.errors.password : ""}
                    </p>
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Signup
                  </button>
                  <br />
                  <Link to="/login" className="btn btn-link my-2 my-sm-0">
                    Login With an Existing Account
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.user,
    errors: state.errors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signup: (userData, history) => dispatch(signup(userData, history))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(RegistationForm);
