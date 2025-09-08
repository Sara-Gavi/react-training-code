import "./App.css";
import TwitterFollowCard from "./TwitterFollowCard";

const users = [
  {
    userName: "pikachu",
    name: "Pikachu",
    isFollowing: true,
  },
  {
    userName: "charmander",
    name: "Charmander",
    isFollowing: false,
  },
];

function App() {
  return (
    <section className="App">
      {users.map(({ userName, name, isFollowing }) => (
        <TwitterFollowCard
          key={userName}
          userName={userName}
          initialIsFollowing={isFollowing}
        >
          {name}
        </TwitterFollowCard>
      ))}
    </section>
  );
}
export default App;
