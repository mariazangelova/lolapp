import { About } from "../../pages/About";
import { Books } from "../../pages/Books";
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
  {
    path: "/books",
    sidebarName: "BOOKS",
    component: Books,
  },
];
