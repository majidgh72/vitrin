import { useEffect, useState } from "preact/hooks";
import { createElement } from "preact";
import { useLoaderData } from "client/App.context";
import { getSSRData } from "server/providers/getSSRData";

export default function ViewHOC({ children }) {
  const serverData = useLoaderData();

  const [clientData, setClientData] = useState<any>(false);

  const getClientData = async () => {
    const clientData = await getSSRData(window.location.pathname);
    setClientData(clientData);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      getClientData();
    }
  }, []);

  if (!clientData && typeof window !== "undefined")
    return <div>LOADING ...</div>;

  return createElement(children, {
    data: typeof window !== "undefined" ? clientData : serverData,
  });
}
