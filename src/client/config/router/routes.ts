import { About } from "client/views/About";
import { Home } from "client/views/Home";

export const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/about",
    component: About,
  },
];
