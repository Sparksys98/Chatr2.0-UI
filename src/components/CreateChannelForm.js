import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../redux/actions";

class CreateChannel extends Component {
  state = {
    name: "",
    image_url: ""
  };

  handleChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  handleSubmit = event => {
    event.preventDefault();
    this.props.createChannel(this.state);
  };

  render() {
    if (!this.props.user) return <Redirect to="/welcome" />;
    const { name, image_url } = this.state;

    return (
      <div className="my-6">
        <div className="container-fluid jumbotron bg-transparent my-5 text-center align-ceneter">
          <div className=" col-6 mx-auto my-5">
            <div className="card my-5">
              <div className="card-body">
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Channel Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      value={name}
                      name="name"
                      placeholder="Channel Name"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="image_url">Image</label>
                    <input
                      type="image_url"
                      className="form-control"
                      id="image_url"
                      value={image_url}
                      name="image_url"
                      placeholder="Image URL"
                      onChange={this.handleChange}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Create Channel
                  </button>
                  <br />
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
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createChannel: userData => dispatch(actions.createChannel(userData))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CreateChannel);
