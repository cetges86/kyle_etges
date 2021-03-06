import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/MainPage/MainPage";
import Bio from "./pages/BioPage/BioPage";
import Media from "./pages/MediaPage/MediaPage";
import Contact from "./pages/ContactPage/ContactPage";
import Commissions from './pages/CommissionsPage/Commissions';
import Blog from "./pages/BlogPage/BlogPage";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/bio" component={Bio} />
          <Route exact path="/media" component={Media} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/commissions" component={Commissions} />
          <Route exact path="/blog" component={Blog} />
          {/* <Route exact path="/admin" component={Admin} /> */}
        </Switch>
      </Router>
    );
  }
}

export default App;
