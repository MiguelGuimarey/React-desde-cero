import { useState } from "react";
import { NavigationBar } from "./components/NavigationBar";
import { LateralNavBar } from "./components/LateralNavBar";
import { FilmGallery } from "./components/FilmGallery";
import "./App.css";

function App() {
  return (
    <main>
      <h1>Mis Peliculas</h1>
      <NavigationBar></NavigationBar>
      <LateralNavBar></LateralNavBar>
      <FilmGallery></FilmGallery>
    </main>
  );
}

export default App;
