import React from 'react';
import styled from 'styled-components';
import Task from './Task';

const StyledTodosList = styled.div`
	margin-top: 15px;
	display: grid;
	row-gap: 15px;
`;

function TodosList({ todos, deleteTask, togleDoneStatus }) {
	return (
		<StyledTodosList>
			{todos.map((task, index) => (
				<Task key={task.id} task={task} deleteTask={deleteTask} index={index} togleDoneStatus={togleDoneStatus} />
			))}
		</StyledTodosList>
	);
}

export default TodosList;
