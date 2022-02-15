import React from 'react';

const Actors = (props) => {
	const {actor: {name}} = props
	return (
		<p>{name},</p>
	);
};

export default Actors;