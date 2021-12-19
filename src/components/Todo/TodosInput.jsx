import React, { useState } from 'react';
import styled from 'styled-components';

const InputWrapper = styled.form`
	display: grid;
	grid-auto-flow: column;
	column-gap: 25px;
	align-items: stretch;
`;

const StyledInput = styled.input`
	min-width: 400px;
	border: none;
	outline: none;
	padding: 7px 15px;
	background-color: rgb(218, 221, 228);

	border-radius: 2px;
`;

const SubmitBtn = styled.button`
	border: none;
	outline: none;
	padding: 5px 10px;
	background-color: rgb(218, 221, 228);
	cursor: pointer;
	border-radius: 2px;
	transition: all 0.3s ease;

	&:hover,
	&:focus {
		background-color: rgb(193, 195, 207);
	}
`;

function TodosInput({ addNewTask }) {
	const [todoText, setTodoText] = useState('');

	const updateTodoText = (e) => {
		setTodoText(e.target.value);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		addNewTask(todoText);
	};

	// const addNewTask = (e) => {
	// 	e.preventDefault();
	// 	if (todoText === '') return;
	// 	setTodos([...todos, { text: todoText, id: Date.now(), isDone: false }]);
	// };

	return (
		<InputWrapper>
			<StyledInput value={todoText} onChange={updateTodoText} placeholder='Enter new task' />
			<SubmitBtn className='submit' onClick={onSubmit}>
				Add
			</SubmitBtn>
		</InputWrapper>
	);
}

export default TodosInput;
