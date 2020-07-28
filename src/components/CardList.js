import React from 'react'
import Card from './Card'

const CardList = ({robots}) => {

	const cardComponent = robots.map((r,n)=>
	    {
	    	return <Card 
		    	key={robots[n].id} 
		    	id={robots[n].id} 
		    	name={robots[n].name} 
		    	email={robots[n].email}
	    	/>		
	    }
	);

	return(
		<div>
			{cardComponent}
		</div>
	);
}

export default CardList;