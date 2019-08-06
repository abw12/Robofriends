import React from 'react';

const Card =(props) => {					//we can alos mention  like thsi ({name,username,email}) 
	//const {name,username,email}=props;	we can also do like this n remoe props in below statements  
	return(
		<div className='tc bg-lightest-blue dib pa2 ma2 br3 grow bw2 shadw'> 
			<img alt='robot1' src={`https://robohash.org/${props.id}?size=200x180 `} />
		<div>
			<h2>{props.name}</h2>
			<h3>{props.username}</h3>
			<p>{props.email}</p>
		</div>
		</div>
		);
}

export default Card;