import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TodosList from './TodosList';
import TodosInput from './TodosInput';
import TodosFilter from './TodosFilter';

const TodosWrapper = styled.div`
	display: grid;
	align-items: start;
	grid-template-rows: repeat(2, fit-content(100%)) 1fr;
	row-gap: 25px;
	font-family: 'Lato', sans-serif;
	font-size: 21px;

	max-width: 800px;
`;

const TodosSpecify = styled.div`
	display: grid;
	grid-template-columns: fit-content(100%) 1fr;
	column-gap: 25px;
	justify-content: space-between;
	grid-auto-flow: row;
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
		setTodos([...todos, { text: text, id: Date.now(), isDone: false, date: Date.now() }]);
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

	const sortTasks = (sort) => {
		// setTodos([...todos].sort((a, b) => a[sort].localeCompare(b[sort])));

		setTodos(
			[...todos].sort((a, b) => {
				if (typeof a[sort] === 'number') {
					return b[sort] - a[sort];
				}
				return a[sort].localeCompare(b[sort]);
			})
		);
	};

	return (
		<TodosWrapper>
			<TodosInput addNewTask={addNewTask} />
			<TodosSpecify>
				<TodosFilter
					sortTasks={sortTasks}
					options={[
						{ value: 'text', name: 'Content' },
						{ value: 'date', name: 'Newest' },
					]}
				/>
				<input disabled placeholder='PLUG for search'/>
			</TodosSpecify>

			<TodosList todos={todos} deleteTask={deleteTask} togleDoneStatus={togleDoneStatus} />
		</TodosWrapper>
	);
}

export default Todos;
