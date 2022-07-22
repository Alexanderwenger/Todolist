import React from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { useState } from "react";

//create your first component
const Home = () => {


	const [tareas, addTarea] = useState([]);
	const [nuevaTarea, setNuevaTarea] = useState("");

	return (
		<div className="text-center">
			<h1>To do list</h1>
			<input value={nuevaTarea} onChange={e => setNuevaTarea(e.target.value)} type="text" placeholder="Tareas nueva?" />
			<button onClick={() => SumarNuevaTarea()}>Adicionar</button>
			<ul>
				{tareas.map((valor, indice) =>
					<li key={indice}>
						{valor}
						<button onClick={() => borrarTarea(indice)}>Borrar</button>
					</li>)}
			</ul>
		</div>
	);

	function SumarNuevaTarea() {
		addTarea([...tareas, nuevaTarea]);
		setNuevaTarea("");
	}

	function borrarTarea(indice) {
		let arraytemporal = [...tareas];
		arraytemporal.splice(indice, 1);
		addTarea(arraytemporal);
	}

};

export default Home;

/* {<div className="text-center">
			<h1>To do list</h1>
			<input value={nuevaTarea} onChange={e=>setNuevaTarea(e.target.value)} type="text" placeholder="Tareas nueva?" />
			{tareas.map((valor, indice, arr) => { return <li key={indice}>{valor}
			<button className="BotonEliminar">x</button></li> })}
		</div>} */