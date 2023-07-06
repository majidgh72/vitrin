import { FunctionComponent } from "preact";
import Router, { Route } from "preact-router";
import { routes } from "./routes";

interface IRouterProviderProps {
  url?: string;
}

export const RouterProvider: FunctionComponent<IRouterProviderProps> = ({
  url,
}) => {
  return (
    <Router url={url}>
      {routes.map((route, index) => (
        <Route key={index} {...route} />
      ))}
    </Router>
  );
};
