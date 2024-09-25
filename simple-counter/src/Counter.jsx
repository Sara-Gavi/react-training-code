import React from "react";

function Counter() {
  //Declaramos un estado llamado count con valor inicial 0.
  //setCount es la funcion que usamos para cambiar o actualizar el valor de count.
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter: {count}</h1>
      {/*Muestra el valor actual del contador*/}
    </div>
  );
}

export default Counter;
