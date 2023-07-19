import render from "preact-render-to-string";
import { getSSRData } from "./getSSRData";
import { App } from "client/App";

export const renderApp = async (url: string) => {
  const data = await getSSRData(url);
  const markup = render(<App url={url} data={data} />);

  return {
    markup,
    data,
  };
};
