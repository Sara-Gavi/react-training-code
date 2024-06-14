/* Objetivo: Crear una aplicación de lista de tareas (To-Do List) utilizando React.

Requisitos:

Agregar Tareas:

El usuario debe poder agregar una nueva tarea.
Cada tarea debe contener un texto descriptivo.
Mostrar Tareas:

Las tareas agregadas deben mostrarse en una lista.
Cada tarea en la lista debe mostrar su texto descriptivo.
Eliminar Tareas:

El usuario debe poder eliminar cualquier tarea de la lista */

import { useState } from "react";
import React from "react";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (event) => {
    const inputValue = event.target.value; //Obtenemos el valor del input que ha escrito la usuaria
    setTask(inputValue); //Actualizar el estado task con el valor del input que ha escrito al usuaria
  };

  const handleSubmit = (event) => {
    //Prevenir el comportamiento por defecto del formulario
    event.preventDefault();
    if (task !== "") {
      //Agregar la tarea a la lista de tareas
      setTasks([...tasks, task]);
      //Limpiar el campo de entrada de agregar la tarea
      setTask("");
    }
  };

  return (
    <div className="App">
      <h1>Lista de tareas</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nueva tarea"
          value={task}
          onChange={handleInputChange}
        ></input>
        <button>Agregar</button>
      </form>
      <ul>
        {
          //Usamos map para iterar sobre cada tarea en tasks y devolver un array de elementos <li>
          tasks.map((task, index) => (
            //Renderizamos cada tarea como un elemento li con su contenido y una clave unica
            <li key={index}>{task}</li>
          ))
        }
      </ul>
    </div>
  );
}
export default App;
