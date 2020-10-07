import * as React from "react";
import { Switch, Route } from "react-router-dom";
import { Routes } from "./components/Navigation/Routes";
import NavigationBar from "./components/Navigation";
import { BookPage } from "./components/BooksField/BookPage";
import { BooksProvider } from "./context/BooksContext";

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
        <BooksProvider>
          <Route path="/books/:title" component={BookPage} />
        </BooksProvider>
      </Switch>
    </div>
  );
}

export default App;
