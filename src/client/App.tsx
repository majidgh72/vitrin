import Router, { Route } from "preact-router";
import { FunctionComponent } from "preact";

import { Home } from "./views/Home";
import { About } from "./views/About";

interface IAppProps {
  url?: string;
}

export const App: FunctionComponent<IAppProps> = ({ url }) => {
  return (
    <div id="app">
      <Router url={url}>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
      </Router>
    </div>
  );
};
