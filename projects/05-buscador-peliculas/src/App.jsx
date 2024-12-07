import "./App.css";
import { useEffect, useRef, useState } from "react";
import { useMovies } from "./hooks/useMovies";
import { Movies } from "./components/Movies";
function useSearch() {
  const [search, updateSearch] = useState("");
  const [error, setError] = useState(null);
  const isFirstInput = useRef(true);

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === "";
      return;
    }
    if (search === "") {
      setError("No se puede buscar una película vacía");
      return;
    }
    if (search.match(/^\d+$/)) {
      setError("No se puede buscar una película con un número");
      return;
    }
    if (search.length < 3) {
      setError("No se puede buscar una película conmenos de 3 caracteres");
      return;
    }
    setError(null);
  }, [search]);
  return { search, updateSearch, error };
}

function App() {
  const [sort, setSort] = useState(false);
  const { search, updateSearch, error } = useSearch();
  const { movies, getMovies, loading } = useMovies({ search, sort });

  const handleSubmit = (event) => {
    event.preventDefault();
    getMovies();
  };

  const handleChange = (event) => {
    updateSearch(event.target.value);
  };

  const handleSort = () => {
    setSort(!sort);
  };

  return (
    <div className="page">
      <header>
        <h1>Buscador de Películas</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            value={search}
            name="peli"
            type="text"
            placeholder="Avengers, Star Wars, El señor de los anillos..."
          />
          <div className="checkSort">
            Ordenar por fecha
            <input type="checkbox" onChange={handleSort} checked={sort} />
          </div>
          <button type="submit">Buscar</button>
        </form>
        {error && (
          <p style={{ color: "red" }} className="error">
            {error}
          </p>
        )}
      </header>
      <main>
        {loading ? <p>Cargando...</p> : <Movies movies={movies}></Movies>}
      </main>
    </div>
  );
}

export default App;
