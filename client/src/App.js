import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/MainPage/MainPage";
import Bio from "./pages/BioPage/BioPage";
import Media from "./pages/MediaPage/MediaPage";
import Contact from "./pages/ContactPage/ContactPage";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/bio" component={Bio} />
          <Route exact path="/media" component={Media} />
          <Route exact path="/contact" component={Contact} />
            {/* Contact page
            Commissions page
            Blog link */}
        </Switch>
      </Router>
    );
  }
}

export default App;
