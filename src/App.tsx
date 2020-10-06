import * as React from "react";
import { Switch, Route } from "react-router-dom";
import { Routes } from "./components/Navigation/Routes";
import NavigationBar from "./components/Navigation";
import { BookPage } from "./components/FetchBooks/BookPage";

function App() {
  return (
    <div>
      <header></header>
      <NavigationBar />
      <Switch>
        {Routes.map((route: any) => (
          <Route exact path={route.path} key={route.path}>
            <route.component />
          </Route>
        ))}
        <Route path="/books/:name" component={BookPage} />
      </Switch>
    </div>
  );
}

export default App;
