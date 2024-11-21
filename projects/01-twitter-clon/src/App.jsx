import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";

export function App() {
  return (
    <section className="App">
      <TwitterFollowCard IsFollowing name="Spyed" userName="spyed" />
      <TwitterFollowCard
        IsFollowing={false}
        name="Omidnikrah"
        userName="omidnikrah"
      />
      <TwitterFollowCard
        IsFollowing={false}
        name="Gummibeer"
        userName="gummibeer.dev"
      />
      <TwitterFollowCard IsFollowing name="MDO" userName="mdo" />
    </section>
  );
}
