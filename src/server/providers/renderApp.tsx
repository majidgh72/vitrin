import render from "preact-render-to-string";
import { App } from "client/App";

export const renderApp = (url: string) => {
  return render(<App url={url} />);
};
