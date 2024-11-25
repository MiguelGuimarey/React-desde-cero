import { useEffect, useState } from "react";
import "./App.css";

const CAT_ENDPOINT_RANDOM_FACT = `https://catfact.ninja/fact`;
const CAT_PREFIX_URL = "https://cataas.com";
function App() {
  const [fact, setFact] = useState();
  const [imageUrl, setImageUrl] = useState();

  // Para recuperar la cita
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then((res) => res.json())
      .then((data) => {
        const { fact } = data;
        setFact(fact);
      });
  }, []);

  // Para recuperar la imagen cada vez que tenemos una cita
  useEffect(() => {
    if (!fact) return;
    const firstWord = fact.split(" ", 3).join(" ");
    fetch(
      `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`
    )
      .then((res) => res.json())
      .then((response) => {
        const { _id } = response;
        const url = `/cat/${_id}/says/${firstWord}`;
        setImageUrl(url);
      });
  }, [fact]);
  return (
    <main>
      <h1>App De Gatitos</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && (
        <img
          src={`${CAT_PREFIX_URL}${imageUrl}`}
          alt={`Image extracted using the first three words for ${fact}`}
        />
      )}
    </main>
  );
}

export default App;
