import React from 'react';
import Card from './Card';

const CardList=({ robotsname })=>{
	/*if(true){
		throw new Error('What The Heckkk is Happening!!!');
	}*/
	return (
		<div>
			{
				robotsname.map((user,i)=>{
					return(
						<Card 
						key={i}
						id={robotsname[i].id}
						name={robotsname[i].name}
						username={robotsname[i].username}
						email={robotsname[i].email}
						/>
					);
				})
			}
		</div>
	);
}

export default CardList;