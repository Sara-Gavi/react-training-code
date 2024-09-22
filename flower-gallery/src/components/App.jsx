import "../styles/App.css";
import Header from "./Header";
import Form from "./Form";
import List from "./List";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Form />
        <List />
      </main>
    </div>
  );
}

export default App;
