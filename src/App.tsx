import * as React from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import NavigationBar from "./components/Navigation";

function App() {
  return (
    <div>
      <header></header>
      <NavigationBar />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
