import React, { useState } from "react";
import PropTypes from "prop-types";

export function List() {
	const deleteItemFromList = () => {};

	return <div />;
}

// List.propTypes = {
// 	todoList: PropTypes.object,
// 	updateTodoList: PropTypes.object
// };

// {props.todoList.map(itemObj => {
// 				return (
// 					<div className="todo" key={itemObj.key}>
// 						<p>{itemObj.item}</p>
// 						<button
// 							aria-label="Delete"
// 							className="delete-btn"
// 							onClick={() => deleteItemFromList(itemObj.key)}>
// 							x
// 						</button>
// 					</div>
// 				);
// // 			})}
// const deleteItemFromList = key => {
// 		const newList = props.todoList.filter(itemObj => {
// 			return itemObj.key !== key;
// 		});
// 		props.updateTodoList(newList);
// 	};
