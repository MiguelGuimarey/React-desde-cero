import "./App.css";

import HomePage from "./pages/Home.jsx";
import AboutPage from "./pages/About.jsx";
import Page404 from "./pages/404.jsx";

import { Router } from "./Router.jsx";
import SearchPage from "./pages/SearchPage.jsx";

const appRoutes = [
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/about",
    Component: AboutPage,
  },
  {
    path: "/search/:query",
    Component: SearchPage,
  },
];

function App() {
  return (
    <main>
      <Router routes={appRoutes} defaultComponent={Page404}></Router>
    </main>
  );
}

export default App;
