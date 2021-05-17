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
        <Route path="/propiedades" exact component={PropertySearcher} />
        <Route path="/propiedades/:id" exact component={SelectedProperty} />
        <Route path="/nueva" exact component={NewHouse} />
      </Switch>
    </Router>
  );
};

export default App;

/* <Route path="*">
            <NoMatch />
          </Route> */
