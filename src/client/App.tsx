import { Route, Router } from "wouter-preact";
import { routes } from "./config/routesMapper";
import { AppContext } from "./App.context";

declare global {
  interface Window {
    __InitialData: string;
  }
}

export const App = ({ url, data }: { url?: string; data?: any }) => {
  return (
    <AppContext.Provider value={data || false}>
      <Router ssrPath={url}>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} component={route.component} />
        ))}
      </Router>
    </AppContext.Provider>
  );
};
