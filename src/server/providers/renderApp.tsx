import render from "preact-render-to-string";
import { h } from "preact";
import { App } from "client/App";

export const renderApp = () => {
  return render(App);
};
