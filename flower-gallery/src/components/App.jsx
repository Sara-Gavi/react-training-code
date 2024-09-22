import { useState } from "react";
import "../styles/App.css";
import Header from "./Header";
import Form from "./Form";
import List from "./List";
import dataFlowers from "../data/flowers.json";

function App() {
  const [flowers] = useState(dataFlowers);

  console.log(flowers);
  return (
    <div className="app">
      <Header />
      <main>
        <Form />
        <List flowers={flowers} />
      </main>
    </div>
  );
}

export default App;
