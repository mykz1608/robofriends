import React from 'react';

const SearchBox = ({searchfield,searchChange}) => {
	return (
		<div className = 'pa2'>
			<input 
				type = 'seach' 
				placeholder = 'search robots'
				onChange = {searchChange}
			/>
		</div>
	);
}

export default SearchBox;
