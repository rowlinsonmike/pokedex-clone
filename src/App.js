import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Browser} />
        <Route exact path="/pokemon/:pokemon" component={Pokemon} />
        <Route path="*" component={FourOhFour} />
      </Switch>
    </div>
  );
}

function Browser() {
  return (
    <div>
      <h2>Browser</h2>
    </div>
  );
}

function Pokemon() {
  return (
    <div>
      <h2>Pokemon</h2>
    </div>
  );
}

function FourOhFour() {
  return (
    <div>
      <h2>404</h2>
    </div>
  );
}
