import React, { useState } from "react";

export function Home() {
	const [newTodo, setNewTodo] = useState("");
	const [todos, setTodos] = useState([]);

	///delete todo
	function removeTodo(id) {
		setTodos(todos.filter(todo => todo.id != id));
	}

	///handle new todo change
	function handleAddTodo(e) {
		e.preventDefault();
		setNewTodo(e.target.value);
		// console.log(e.target.value);
	}

	///handle new todo
	function handleSubmit(e) {
		e.preventDefault();
		if (newTodo === "") return;
		setTodos([...todos, { id: Date.now(), text: newTodo }]);
		e.target.reset();
	}

	return (
		<div className=" container home">
			<h2>To-dos</h2>
			{todos.length === 0 && <p>There are no to-dos. Add new to-do.</p>}

			<form className="my-form" onSubmit={handleSubmit}>
				<input
					type="text"
					maxLength="80"
					className="form-control my-input"
					placeholder="Add to-do"
					onChange={handleAddTodo}
				/>
				<ul className="my-ul">
					{todos.map(todo => (
						<span className="my-li" key={todo.id}>
							{todo.text}

							<a
								className="close-btn"
								href="#"
								onClick={() => removeTodo(todo.id)}>
								X
							</a>
						</span>
					))}
				</ul>
			</form>
		</div>
	);
}
