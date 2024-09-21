import "./App.css";

function App() {
  return (
    <div className="app">
      <header>
        <h1>Flower gallery</h1>
      </header>
      <main>
        <form>
          <input type="text" placeholder="Find your flowers" value=""></input>
        </form>
        <ul className="image__gallery">
          <li className="image__card">
            <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.teleflora.es%2Fproducto%2Framo-rosas-rojas-xl-rosas-a-domicilio-34439&psig=AOvVaw0IReJu5Rm2qgHVvrdJfaHR&ust=1727024012632000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKCBs_y_1IgDFQAAAAAdAAAAABAE"></img>
            <h3>Red Flowers</h3>
          </li>
          <li className="image__card">
            <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.teleflora.es%2Fproducto%2Framo-rosas-rojas-xl-rosas-a-domicilio-34439&psig=AOvVaw0IReJu5Rm2qgHVvrdJfaHR&ust=1727024012632000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKCBs_y_1IgDFQAAAAAdAAAAABAE"></img>
            <h3>white Flowers</h3>
          </li>
          <li className="image__card">
            <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.teleflora.es%2Fproducto%2Framo-rosas-rojas-xl-rosas-a-domicilio-34439&psig=AOvVaw0IReJu5Rm2qgHVvrdJfaHR&ust=1727024012632000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKCBs_y_1IgDFQAAAAAdAAAAABAE"></img>
            <h3>yellow Flowers</h3>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
