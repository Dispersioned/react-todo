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
	border-radius: 2px;
`;

const TaskText = styled.p`
	cursor: pointer;
	/* text-overflow: ellipsis; */
	overflow-wrap: anywhere;
	/* max-width: 800px; */
`;

const TaskDeleteBtn = styled.div`
	min-width: 15px;
	height: 15px;
	background-color: transparent;
	border: none;
	outline: none;
	cursor: pointer;
	margin-left: 15px;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

const TaskContent = styled.div``;

const TaskDate = styled.div``;

function Task({ task, index, deleteTask, togleDoneStatus }) {
	const onTaskDelete = (e) => {
		deleteTask(task);
	};

	const onStatusChange = (e) => {
		togleDoneStatus(task);
	};

	let taskDate = new Date(+task.date)
	// TODO: add exact time hh:ss and UTC choose option.

	return (
		<TaskWrapper isDone={task.isDone}>
			<TaskContent>
				<TaskText onClick={onStatusChange}>{`${index + 1}. ${task.text}`}</TaskText>
				<TaskDate>{`${taskDate.getDate()}.${taskDate.getMonth()}.${taskDate.getFullYear()}`}</TaskDate>
			</TaskContent>
			<TaskDeleteBtn onClick={onTaskDelete}>
				<img src={deleteIcon} alt='delete task' />
			</TaskDeleteBtn>
		</TaskWrapper>
	);
}

export default Task;
