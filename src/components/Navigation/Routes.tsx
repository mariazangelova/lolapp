import { About } from "../../pages/About";
import { Home } from "../../pages/Home";

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
];
