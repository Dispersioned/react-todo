import React from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import './Todo.css';

function Todo() {
	return (
		<div className='todo-wrapper'>
			Test
			<TodoInput />
			<TodoList />
		</div>
	);
}

export default Todo;
