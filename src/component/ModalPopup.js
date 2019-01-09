import React, { createClass } from "react";

const Parent = React.createClass({
  getInitialState: function() {
    return { signup: false, login: true };
  },
  switch: function(word) {
    var signup, login;
    if (word == "signup") {
      signup = true;
      login = false;
    } else {
      login = true;
      signup = false;
    }
    return this.setState({ login: login, signup: signup });
  },
  render: function() {
    var self = this;
    return (
      <div>
        <div id="buttons">
          <p
            id="signupButton"
            onClick={self.switch.bind(null, "signup")}
            className={self.state.signup ? "yellow" : "blue"}
          >
            Sign In
          </p>
          <p
            id="loginButton"
            onClick={self.switch.bind(null, "login")}
            className={self.state.login ? "yellow" : "blue"}
          >
            {" "}
            Login
          </p>
        </div>

        {self.state.signup ? <Signup /> : null}
        {self.state.login ? <Login /> : null}
      </div>
    );
  }
});
