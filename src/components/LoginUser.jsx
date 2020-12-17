import React, { Component } from "react";
import { AppContext } from '../App.js'

export default class LoginUser extends Component {
  render() {
    return (
      <div className="loginUser">
        <AppContext.Consumer>
          {(context) => (
            <form onSubmit={context.state.handleLoginSubmit}>
              <input
                placeholder="Email Address"
                type="text"
                name="email"
                onChange={context.state.handleLoginChange}
                value={context.state.loginEmail}
                id="loginEmail"
              />
              <input
                placeholder="Password"
                type="password"
                name="password"
                onChange={context.state.handleLoginChange}
                value={context.state.loginPassword}
                id="loginPassword"
              />
              <input className="loginButton" type="submit" value="Login" />
              <div className="registerButtonDiv">New user? <button className="registerButton" onClick={context.state.startRegister}>Sign up here!</button></div>
            </form>
          )}
        </AppContext.Consumer>
      </div>
    );
  }
}
