import "./App.css";
import TwitterFollowCard from "./TwitterFollowCard";

function App() {
  return (
    <>
      <div className="App">
        <TwitterFollowCard isFollowing userName="pikachu" name="Pikachu" />
        <TwitterFollowCard
          isFollowing={false}
          userName="charmander"
          name="Charmander"
        />
      </div>
    </>
  );
}
export default App;
