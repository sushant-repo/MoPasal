import { Route, Switch } from "react-router-dom";
import Landing from "./pages/landing";
import NavBar from "./components/common/navbar";
import React, { Component } from "react";

export default class App extends Component {
  state = {
    currentPage: "landings",
  };
  changePage = (currentPage) => {
    this.setState({ currentPage });
  };
  render() {
    const { currentPage } = this.state;
    return (
      <React.Fragment>
        <NavBar currentPage={currentPage} onClick={this.changePage} />

        <Switch>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </React.Fragment>
    );
  }
}
