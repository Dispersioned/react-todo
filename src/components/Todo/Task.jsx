import React from 'react';
import deleteIcon from '../../assets/task-delete-icon.png';
import styled from 'styled-components';

const TaskWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: ${(props) => (props.isDone ? 'rgb(30, 128, 27)' : 'rgb(218, 221, 228)')};
	padding: 7px 15px;
	font-size: 18px;
`;

const TaskText = styled.p`
	cursor: pointer;
`;

const TaskDeleteBtn = styled.div`
	width: 15px;
	height: 15px;
	background-color: transparent;
	border: none;
	outline: none;
	cursor: pointer;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

function Task({ task, index, deleteTask, togleDoneStatus }) {
	const onTaskDelete = (e) => {
		deleteTask(task);
	};

	const onStatusChange = (e) => {
		togleDoneStatus(task);
	};

	return (
		<TaskWrapper isDone={task.isDone}>
			<TaskText onClick={onStatusChange}>{`${index + 1}. ${task.text}`}</TaskText>
			<TaskDeleteBtn onClick={onTaskDelete}>
				<img src={deleteIcon} alt='delete task' />
			</TaskDeleteBtn>
		</TaskWrapper>
	);
}

export default Task;
