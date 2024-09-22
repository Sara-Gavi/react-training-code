import { useState } from "react";
import "../styles/App.css";
import Header from "./Header";
import Form from "./Form";
import List from "./List";
import dataFlowers from "../data/flowers.json";

function App() {
  const [flowers] = useState(dataFlowers);
  const [filterTitle, setFilterTitle] = useState("");

  const handleFilterTitle = (filterValue) => {
    setFilterTitle(filterValue);
  };

  const filteredFlowers = flowers.filter((flower) =>
    flower.title.includes(filterTitle)
  );

  return (
    <div className="app">
      <Header />
      <main>
        <Form handleFilterTitle={handleFilterTitle} />
        <List flowers={filteredFlowers} />
      </main>
    </div>
  );
}

export default App;
