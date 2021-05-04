// import logo from "./logo.svg";
import "./App.css";

import React, { Suspense } from "react";
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";
const Home = React.lazy(() => import("./Home"));
const Accessibility = React.lazy(() => import("./Learn/Accessibility"));

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Router>
        <div className="App">
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route
              path="/Learn/Accessibility"
              render={() => <Accessibility />}
            />
            <Route exact path="/" render={() => <Home />} />
          </Switch>
        </div>
      </Router>
    </Suspense>
  );
}

export default App;
