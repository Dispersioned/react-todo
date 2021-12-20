import React from 'react';
import styled from 'styled-components';
import Task from './Task';

const StyledTodosList = styled.div`
	display: grid;
	row-gap: 20px;
`;

const NoNewTasks = styled.div`
	display: flex;
	justify-content: center;

	margin-top: 15px;
	color: rgb(218, 221, 228);
	font-size: 23px;
`;

function TodosList({ todos, deleteTask, togleDoneStatus }) {
	return (
		<div>
			{todos.length > 0 ? (
				<StyledTodosList>
					{todos.map((task, index) => (
						<Task key={task.id} task={task} deleteTask={deleteTask} index={index} togleDoneStatus={togleDoneStatus} />
					))}
				</StyledTodosList>
			) : (
				<NoNewTasks>No new tasks. Hooray!</NoNewTasks>
			)}
		</div>
	);
}

export default TodosList;
