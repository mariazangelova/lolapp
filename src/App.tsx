import * as React from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";

function App() {
  return (
    <div>
      <header></header>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
