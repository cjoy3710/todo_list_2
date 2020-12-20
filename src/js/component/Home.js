import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import List from "./List";

export function Home() {
	const [currentItem, setCurrentItem] = useState(null);
	const [todoList, updateTodoList] = useState([]);

	const onChangeHandler = e => {
		setCurrentItem(e.target.value);
	};

	const addItemToList = () => {
		updateTodoList([...todoList, { item: currentItem, key: Date.now }]);
		setCurrentItem("");
	};

	return (
		<div className="home">
			<header className="header">
				<h2>Todos</h2>
				<div className="wrapper">
					<div className="input-wrapper">
						<input value={currentItem} onChange={onChangeHandler} />
						<button onClick={addItemToList}>+</button>
					</div>
					<List />
				</div>
			</header>
		</div>
	);
}

