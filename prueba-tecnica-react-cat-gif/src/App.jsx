import React, { useState, useEffect } from "react";

function App() {
  const GYPHY_APY_KEY = "2cZkiFTqyiS79UdSapL6LHWlublpl7iy";
  //Estado para almacenar el dato del gato
  const [CatFact, setCatFact] = useState("");
  const [firstThreeWords, setFirstThreeWords] = useState("");
  const [CatGif, setCatGif] = useState("");

  const callGiphyApi = (String) => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${String}&api_key=${GYPHY_APY_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("gif", data.data[0].images.original.url);
        setCatGif(data.data[0].images.original.url);
      });
  };

  //Funciones
  const fetchCatFact = async () => {
    try {
      const response = await fetch("https://catfact.ninja/fact");
      const data = await response.json();
      setCatFact(data.fact);
    } catch (error) {
      console.error("error fetching cat fact", error);
    }
  };

  //Función para extraer las tres sprimeras palabras de un texto

  const extractFirstThreeWords = (text) => {
    //Dividir el dato en palabras
    const words = text.split(" ");
    //seeleccionamos las tres primeras palabras
    const threeWords = words.slice(0, 3);

    //Unir las palabras de nuevo en una cadena

    const result = threeWords.join(" ");

    return result;
  };

  // Obtener un dato sobre gatos al cargar el componente o la página

  useEffect(() => {
    fetchCatFact();
  }, []);

  useEffect(() => {
    if (CatFact) {
      const resultThreeWords = extractFirstThreeWords(CatFact);
      setFirstThreeWords(resultThreeWords);
      callGiphyApi(resultThreeWords);
    }
  }, [CatFact]);

  return (
    <>
      <div className="app">
        <h1>Dato sobre gatos</h1>
        <p>{CatFact}</p>
        <p>Las tre sprimeras palabras : {firstThreeWords}</p>
        {CatGif && <img src={CatGif} alt="cat gif" />}
      </div>
    </>
  );
}

export default App;
