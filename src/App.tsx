import * as React from "react";
import { Switch, Route } from "react-router-dom";
import { Routes } from "./components/Navigation/Routes";
import NavigationBar from "./components/Navigation";
import { BookPage } from "./components/BooksField/BookPage";
import { BooksProvider } from "./context/BooksContext";
import { UserProvider } from "./context/UserContext";
import Login from "./components/Login";
import { Signup } from "./components/Signup";

function App() {
  return (
    <div>
      <UserProvider>
        <NavigationBar />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          {Routes.map((route: any) => (
            <Route exact path={route.path} key={route.path}>
              <route.component />
            </Route>
          ))}
          <BooksProvider>
            <Route path="/books/:title" component={BookPage} />
          </BooksProvider>
        </Switch>
      </UserProvider>
    </div>
  );
}

export default App;
