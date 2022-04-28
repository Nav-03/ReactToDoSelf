export async function getTodos() {

    const response = await fetch(
        "https://assets.breatheco.de/apis/fake/todos/user/Nav"
    );
    const payload = await response.json();
    return payload
}

export async function createTodos() {

    const response = await fetch(
        "https://assets.breatheco.de/apis/fake/todos/user/Nav",
        {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            "body": JSON.stringify([]),
        }
    )
}


export async function updateTodos(todos) {
    (
        "https://assets.breatheco.de/apis/fake/todos/user/Nav",
        {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            "body": JSON.stringify(todos),
        }
    )
}

export async function deleteTodos(todos) {
    (
        "https://assets.breatheco.de/apis/fake/todos/user/Nav",
        {
            method: "DELETE",
            headers: {
                "content-type": "application/json"
            },
            "body": JSON.stringify(todos),
        }
    )
}



fetch("https://assets.breatheco.de/apis/fake/todos/user/Nav", {
    method: "PUT",
    body: JSON.stringify(todos),
    headers: {
        "Content-Type": "application/json",
    },
})
    .then((response) => {
        if (response.status == 200) return response.json();
    })
    .then((response) => console.log(response))
    .catch((error) => console.log("Error fetching todos:", error));


// const addTodo = (newTodo) => {
//     const newTodos = [...todos, newTodo];
//     setTodos(newTodos);
// };

// const completeTodo = (index) => {
//     const newTodos = [...todos];
//     newTodos[index].done = true;
//     setTodos(newTodos);
// };

// const removeTodo = (indexToDelete) =>
//     setTodos(
//         todos.filter((item, currentIndex) => currentIndex !== indexToDelete)
//     );
