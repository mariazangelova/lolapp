import { About } from "../../pages/About";
import { Books } from "../../pages/Books";
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
    path: "/books",
    sidebarName: "BOOKS",
    component: Books,
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
