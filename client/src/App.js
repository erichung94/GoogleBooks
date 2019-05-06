
import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/nav";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Nav />
            <Switch>
              <Route exact path="/" component={Search} />
              <Route path="/search" component={Search} />
              <Route exact path="/saved" component={Saved} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;