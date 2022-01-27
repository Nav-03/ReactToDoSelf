import React, { useState } from "react";

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

function ToDoList() {
	fetch("https://assets.breatheco.de/apis/fake/todos/user/alesanchezr", {
		method: "GET",
		body: JSON.stringify(todos),
		headers: {
			"Content-Type": "application/json",
		},
	})
		.then((resp) => {
			console.log(resp.ok); // will be true if the response is successfull
			console.log(resp.status); // the status code = 200 or code = 400 etc.
			console.log(resp.text()); // will try return the exact result as string
			return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
		})
		.then((data) => {
			//here is were your code should start after the fetch finishes
			console.log(data); //this will print on the console the exact object received from the server
		})
		.catch((error) => {
			//error handling
			console.log(error);
		});
	const [todos, setTodos] = useState([
		{ text: "Learn about React", isCompleted: false },
		{ text: "Practice React", isCompleted: false },
		{ text: "Have nervous breakdown", isCompleted: false },
	]);
	const addTodo = (text) => {
		const newTodos = [...todos, { text }];
		setTodos(newTodos);
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