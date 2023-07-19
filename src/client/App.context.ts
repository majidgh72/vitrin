import { useContext } from "preact/hooks";
import { createContext } from "preact";

export const AppContext = createContext<any>({});

export const useLoaderData = () => {
  // Read data from context (for Node)
  let data = useContext(AppContext);

  return data;
};
