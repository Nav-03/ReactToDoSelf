import React, { useState } from "react";
import Header from "./Header.jsx";
import ToDoList from "./ToDoList.jsx";
import Data from "./Data.json";

//create your first component
const Home = () => {
	const [toDoList, setToDoList] = useState(Data);
	return (
		<>
			<Header />
			<ToDoList toDoList={toDoList} />
		</>
	);
};

export default Home;
