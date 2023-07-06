import { FunctionComponent } from "preact";
import { RouterProvider } from "client/config/router";

interface IAppProps {
  url?: string;
}

export const App: FunctionComponent<IAppProps> = ({ url }) => {
  return (
    <div id="app">
      <RouterProvider url={url} />
    </div>
  );
};
