import { Route, Switch } from "react-router-dom";
import Landing from "./pages/landing";
import NavBar from "./components/common/navbar";
import React, { Component } from "react";
import Home from "./pages/home";

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
          <Route path="/home" component={Home} />
          <Route path="/" exact component={Landing} />
        </Switch>
      </React.Fragment>
    );
  }
}
