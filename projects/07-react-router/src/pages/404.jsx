import { Link } from "../components/Link.jsx";

export default function Page404() {
  return (
    <>
      <div>
        <h1>This is NOT fine</h1>
        <img
          src="https://media.tenor.com/bicLOtBrmAIAAAAM/this-is-fine.gif"
          alt="Gif del perro quemandose en una casa"
        ></img>
      </div>
      <Link to="/">Volver a Home</Link>
    </>
  );
}
