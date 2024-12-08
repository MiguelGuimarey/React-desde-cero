import { useEffect, useState } from "react";
import "./App.css";

import HomePage from "./pages/Home.jsx";
import AboutPage from "./pages/About.jsx";
import { EVENTS } from "./consts.js";

function App() {
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

  return (
    <main>
      {currentPath === "/" && <HomePage></HomePage>}
      {currentPath === "/about" && <AboutPage></AboutPage>}
    </main>
  );
}

export default App;
