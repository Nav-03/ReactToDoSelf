import React, { useState } from "react";
import Header from "./Header.jsx";
import ToDoList from "./ToDoList.jsx";

//create your first component
const Home = () => {
	return (
		<>
			<ToDoList />
		</>
	);
};

export default Home;
