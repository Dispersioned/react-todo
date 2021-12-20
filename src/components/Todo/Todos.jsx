import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TodosList from './TodosList';
import TodosInput from './TodosInput';
import TodosFilter from './TodosFilter';

const TodosWrapper = styled.div`
	font-family: 'Lato', sans-serif;
	font-size: 21px;

	max-width: 800px;
`;

function Todos() {
	const getDataFromLocalStorage = () => {
		let data = localStorage.getItem('todos');
		if (!data) return [];
		return JSON.parse(data);
	};

	const setDataToLocalStorage = (data) => {
		localStorage.setItem('todos', JSON.stringify(data));
	};

	const [todos, setTodos] = useState(getDataFromLocalStorage());

	useEffect(() => {
		setDataToLocalStorage(todos);
	}, [todos]);

	const addNewTask = (text) => {
		if (text === '') return;
		setTodos([...todos, { text: text, id: Date.now(), isDone: false, date: Date.now()}]);
	};

	const deleteTask = (task) => {
		setTodos(todos.filter((t) => t.id !== task.id));
	};

	const togleDoneStatus = (task) => {
		const newTodos = todos.map((t) => {
			if (t.id === task.id) {
				t.isDone = t.isDone ? false : true;
			}
			return t;
		});
		setTodos(newTodos);
	};

	return (
		<TodosWrapper>
			<TodosInput addNewTask={addNewTask} />
			<TodosFilter />
			<TodosList todos={todos} deleteTask={deleteTask} togleDoneStatus={togleDoneStatus} />
		</TodosWrapper>
	);
}

export default Todos;
