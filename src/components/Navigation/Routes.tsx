import { About } from "../../pages/About";
import { Home } from "../../pages/Home";
import Login from "../Login";
import Signup from "../Signup";

export const Routes = [
  {
    path: "/",
    sidebarName: "HOME",
    component: Home,
  },
  {
    path: "/about",
    sidebarName: "ABOUT",
    component: About,
  },
  {
    path: "/login",
    sidebarName: "LOGIN",
    component: Login,
  },
  {
    path: "/signup",
    sidebarName: "SIGNUP",
    component: Signup,
  },
];
