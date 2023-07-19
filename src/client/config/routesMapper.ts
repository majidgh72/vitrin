import { routes as routesMap } from "./routes";
import ViewHOC from "./ViewHOC";

export const routes = routesMap.map((route) => ({
  path: route.path,
  component: () => ViewHOC({ children: route.component.Component }),
  services: route.component.Services,
}));
