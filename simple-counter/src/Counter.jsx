import React from "react";
import { useState } from "react";

function Counter() {
  //Declaramos un estado llamado count con valor inicial 0.
  //setCount es la funcion que usamos para cambiar o actualizar el valor de count.
  const [count, setCount] = useState(0);

  // Funciones para manejar las actualizaciones del estado del contador.
  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      {/*Muestra el valor actual del contador*/}
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Counter;
