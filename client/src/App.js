import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/MainPage/MainPage";
import Bio from "./pages/BioPage/BioPage";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* <Nav /> */}
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/bio" component={Bio} /> */}
            {/* <Route exact path="/signup" component={SignUp} />
            <Route exact path="/yearbook" component={Yearbook} />
            <Route component={NoMatch} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
