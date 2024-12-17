import "./App.css";

import { Router } from "./components/Router.jsx";
import { Route } from "./components/Route.jsx";
import { Suspense, lazy } from "react";

const HomePage = lazy(() => import("./pages/Home.jsx"));
const AboutPage = lazy(() => import("./pages/About.jsx"));
const Page404 = lazy(() => import("./pages/404.jsx"));
const SearchPage = lazy(() => import("./pages/SearchPage.jsx"));

const appRoutes = [
  {
    path: "/search/:query",
    Component: SearchPage,
  },
];

function App() {
  return (
    <main>
      <Suspense fallback={<div>Loading ...</div>}>
        <Router routes={appRoutes} defaultComponent={Page404}>
          <Route path="/" Component={HomePage} />
          <Route path="/about" Component={AboutPage} />
        </Router>
      </Suspense>
    </main>
  );
}

export default App;
