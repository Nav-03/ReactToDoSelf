import React, { useState } from "react";
import Data from "./Data.json";

//Read list of to dos and display

function ToDoList() {
	const [toDoList, setToDoList] = useState(Data);
	return (
		<>
			<form className="inputList">
				<input className="ToDoList" placeholder="To-Do List" />
				<ul className="taskList"></ul>
			</form>
		</>
	);
}

export default ToDoList;
