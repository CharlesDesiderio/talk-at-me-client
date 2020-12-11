import React, { Component } from "react";
import { AppContext } from '../App.js'

export default class LoginUser extends Component {
  render() {
    return (
      <React.Fragment>
        <AppContext.Consumer>
          {(context) => (
            <form>
              <input
                type="text"
                onChange={context.state.handleLoginChange}
                value={context.state.loginEmail}
                id="loginEmail"
              />
            </form>
          )}
        </AppContext.Consumer>
      </React.Fragment>
    );
  }
}
