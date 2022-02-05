import React, { useEffect, useState } from "react";

//Read list of to dos and display

function Todo({ todo, index, completeTodo, removeTodo }) {
	return (
		<div
			className="todo"
			style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
			{todo.text}
			<div>
				<button onClick={() => completeTodo(index)}>
					<i className="fas fa-check"></i>
				</button>
				<button onClick={() => removeTodo(index)}>
					<i className="fas fa-trash-alt"></i>
				</button>
			</div>
		</div>
	);
}

// adding each todo
function TodoForm({ addTodo }) {
	const [value, setValue] = useState("");
	const handleSubmit = (e) => {
		e.preventDefault();

		if (!value) return;
		addTodo(value);
		setValue("");
	};
	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				className="input"
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
		</form>
	);
}

//List of To-Do items with functionality sent to render on page

function ToDoList(props) {
	const getAllTodos = async function () {
		const options = {
			method: "GET",
			body: JSON.stringify(),
			headers: { "content-type": "application/json" },
		};
		const response = await fetch(
			"https://assets.breatheco.de/apis/fake/todos/user/unicorn",
			options
		);
		setList(await response.json());
	};

	useEffect(() => {
		//code goes here
		getAllTodos();
	}, []);

	const [todos, setTodos] = useState([
		{ text: "Learn about React", isCompleted: false },
		{ text: "Practice React", isCompleted: false },
		{ text: "Have nervous breakdown", isCompleted: false },
	]);
	const addTodo = async (newTodos) => {
		const options = {
			method: "PUT",
			body: JSON.stringify(newTodos),
			headers: { "content-type": "application/json" },
		};
		const response = await fetch(
			"https://assets.breatheco.de/apis/fake/todos/user/unicorn",
			options
		);
		setList(await response.json());
	};

	const completeTodo = (index) => {
		const newTodos = [...todos];
		newTodos[index].isCompleted = true;
		setTodos(newTodos);
	};

	const removeTodo = (indexToDelete) =>
		setTodos(
			todos.filter((item, currentIndex) => currentIndex !== indexToDelete)
		);

	return (
		<div className="app">
			<header className="Title">
				<h1>To Do List</h1>
			</header>
			<div className="todo-list">
				<TodoForm addTodo={addTodo} />

				{todos.map((todo, index) => (
					<Todo
						key={index}
						index={index}
						todo={todo}
						completeTodo={completeTodo}
						removeTodo={removeTodo}
					/>
				))}
			</div>
		</div>
	);
}

export default ToDoList;
