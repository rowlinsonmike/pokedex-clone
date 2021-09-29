import React from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Browser from "./pages/Browser";

const AppContainer = styled.div`
  margin: auto 10%;
  height: 100vh;
  background: #fff;
`;

export default function App() {
  return (
    <AppContainer>
      <Switch>
        <Route exact path="/" component={Browser} />
        <Route exact path="/pokemon/:pokemon" component={Pokemon} />
        <Route path="*" component={FourOhFour} />
      </Switch>
    </AppContainer>
  );
}

function Pokemon() {
  return (
    <div>
      <span>Pokemon</span>
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
