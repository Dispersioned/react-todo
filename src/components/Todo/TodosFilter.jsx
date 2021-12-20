import React from 'react'

function TodosFilter() {
	return (
		<div>
			<select>
				<option value={null}>По названию</option>
				<option value={null}>По дате</option>
			</select>
		</div>
	)
}

export default TodosFilter
