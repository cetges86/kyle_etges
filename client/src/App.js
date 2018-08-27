import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/MainPage/MainPage";
import Bio from "./pages/BioPage/BioPage";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/bio" component={Bio} />
            {/* Media page
            Contact page
            Commissions page
            Blog link */}
        </Switch>
      </Router>
    );
  }
}

export default App;
