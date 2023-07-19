import { pathToRegexp } from "path-to-regexp";
import { routes } from "client/config/routes";

export const getSSRData = async (url: string) => {
  const currentRoute = routes.find((route) => {
    const routeRegexp = pathToRegexp(route.path);
    const isMatch = routeRegexp.exec(url);

    return isMatch;
  });

  const data = await currentRoute.services.getLoaderData();
  return data;
};
