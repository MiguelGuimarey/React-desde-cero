import { EVENTS } from "./consts";
import { useState, useEffect } from "react";
import { match } from "path-to-regexp";

export function Router({
  routes = [],
  defaultComponent: DefaultComponent = () => <h1>404</h1>,
}) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange);
    window.addEventListener(EVENTS.POPSTATE, onLocationChange);

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange);
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange);
    };
  }, []);

  let routeParams = {};

  const Page = routes.find(({ path }) => {
    if (path === currentPath) return true;

    // Hemos usado path-to-regexp para poder
    // detectar rutas dinámicas como por ejemplo
    // /search/: query <- :query es una ruta dinámica
    const matchUrl = match(path, { decode: decodeURIComponent });
    const matched = matchUrl(currentPath);

    if (!matched) return false;

    // Guardar los parámetros de la url que eran dinámicos
    // y que hemos extraido con path-to-regexp
    // por ejemplo , si la ruta es /search/: query
    // y la url es /search/javascript
    // matched.params.query === 'javascript'
    routeParams = matched.params; // { query: 'javascript'} // /search
    return true;
  })?.Component;
  return Page ? (
    <Page routeParams={routeParams} />
  ) : (
    <DefaultComponent routeParams={routeParams} />
  );
}
