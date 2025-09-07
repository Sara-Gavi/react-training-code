import "./App.css";
function App() {
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          alt="El avatar de Pikachu"
          src="https://unavatar.io/pikachu"
        />
        <div className="tw-followCard-info">
          <strong>Pikachu</strong>
          <span className="tw-followCard-infoUserName">@Pikapika</span>
        </div>
      </header>
      <aside>
        <button className="tw-followCard-button">Seguir</button>
      </aside>
    </article>
  );
}
export default App;
