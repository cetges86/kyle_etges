import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Splash from "./pages/SplashPage/Splash";
import Main from "./pages/MainPage/MainPage";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* <Nav /> */}
          <Switch>
            <Route exact path="/" component={Splash} />
            <Route exact path="/main" component={Main} />
           {/*  <Route exact path="/user/:id" component={Welcome} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/yearbook" component={Yearbook} />
            <Route component={NoMatch} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
