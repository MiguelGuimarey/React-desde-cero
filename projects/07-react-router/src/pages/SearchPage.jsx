import { useEffect } from "react";
import { Link } from "../components/Link.jsx";

export default function SearchPage({ routeParams }) {
  useEffect(() => {
    document.title = `Has Buscado ${routeParams.query}`;
  }, []);
  return (
    <>
      <h1>Has Buscado {routeParams.query}</h1>
    </>
  );
}
