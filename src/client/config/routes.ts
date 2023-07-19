import About from "client/views/About";
import Home from "client/views/Home";
import ViewHOC from "./ViewHOC";

export const routes = [
  {
    path: "/",
    component: () => ViewHOC({ children: Home.Component }),
    services: Home.Services,
  },
  {
    path: "/about",
    component: () => ViewHOC({ children: About.Component }),
    services: About.Services,
  },
];
