import React, { Component } from "react";
import { AppContext } from '../App.js'

export default class LoginUser extends Component {
  render() {
    return (
      <React.Fragment>
        <AppContext.Consumer>
          {(context) => (
            <form onSubmit={context.state.handleLoginSubmit}>
              <input
                type="text"
                name="email"
                onChange={context.state.handleLoginChange}
                value={context.state.loginEmail}
                id="loginEmail"
              />
              <input
                type="password"
                name="password"
                onChange={context.state.handleLoginChange}
                value={context.state.loginPassword}
                id="loginPassword"
              />
              <input type="submit" value="Login" />
            </form>
          )}
        </AppContext.Consumer>
      </React.Fragment>
    );
  }
}
