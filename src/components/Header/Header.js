import React from 'react';
import {NavLink, Outlet} from 'react-router-dom';

import './Header.css'

const Header = () => {
	return (
		<div>
			<div className={'header'}>
				<NavLink to={'/movies'}>Movies</NavLink>
				<NavLink to={'/genres'}>Genres</NavLink>
			</div>
			<Outlet/>
		</div>
	);
};

export default Header;