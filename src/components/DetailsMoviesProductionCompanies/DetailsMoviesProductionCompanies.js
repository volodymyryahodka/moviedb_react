import React from 'react';

import {apiImg} from '../../urls/urls';

const DetailsMoviesProductionCompanies = (props) => {
	const {name: {logo_path, name, origin_country}} = props
	return (
		<div>
			<div><img src={apiImg + logo_path} alt={name}/></div>
			<p>{name}</p>
			<p>{origin_country}</p>
		</div>
	);
};

export default DetailsMoviesProductionCompanies;