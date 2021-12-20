import React, { useState } from 'react';
import styled from 'styled-components';

const StyledSelect = styled.select`
	padding: 7px 5px;
	border: none;
	border-radius: 2px;
	outline: none;
	cursor: pointer;
	background-color: rgb(218, 221, 228);
`;

function TodosFilter({ options, sortTasks }) {
	const [selectedSort, setSelectedSort] = useState('');

	const handleChange = (e) => {
		setSelectedSort(e.target.value);
		sortTasks(e.target.value);
	};

	return (
		<StyledSelect value={selectedSort} onChange={handleChange}>
			<option disabled value=''>
				Sort by
			</option>
			{options.map((option) => {
				return (
					<option value={option.value} key={option.value}>
						{option.name}
					</option>
				);
			})}
		</StyledSelect>
	);
}

export default TodosFilter;
