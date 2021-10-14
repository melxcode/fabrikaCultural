import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./containers/Home";
import PropertySearcher from "./containers/PropertySearcher";
import SelectedProperty from "./containers/SelectedProperty";
import SmoothScroll from "smooth-scroll";
import NewHouse from "./containers/NewHouse";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
};

export default App;

/* <Route path="*">
            <NoMatch />
          </Route> */
