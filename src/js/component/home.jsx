import React from "react";
import { useState } from "react";

const Home = () => {

	const [tareas, setTareas] = useState([]);
	const [nuevaTarea, setNuevaTarea] = useState("");

	return (
		<div className="container">
			<h1>To do list</h1>
			<input value={nuevaTarea} onChange={e => setNuevaTarea(e.target.value)} type="text" placeholder="Tareas nueva?" />
			<button onClick={() => AdicionarTarea()}>Adicionar</button>
			<ul className="ulclass">
				{tareas.map((elemento, indice) =>
					<li className="liclass" key={indice}>
						{elemento}
						<span className="spanclass"><i onClick={() => borrarTarea(indice)}className="fa-solid fa-xmark"></i></span>
					</li>)}
			</ul>
			<span className="spanfinal"> Tareas restantes: {tareas.length}</span>
		</div>
	);

	// FUNCION UTILIZADA POR BOTON PARA INCOPORAR TAREA A ARRAY TAREAS
	function AdicionarTarea() {
		setTareas([...tareas, nuevaTarea]);
		setNuevaTarea("");
	}

	function borrarTarea(indice) {
		let arraytemporal = [...tareas]; // ... SIGNIFICA TODO LO QUE CONTIENE "TAREAS"
		arraytemporal.splice(indice, 1); //BORRA "1" ELEMENTO DE LA POSICION "INDICE" DEL ARRAY
		setTareas(arraytemporal); //
	}

};

export default Home;
