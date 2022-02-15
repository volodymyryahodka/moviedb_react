import React from 'react';
import {NavLink} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {moviesFilter} from '../../store/slice/popularMovies.slice';
import './Genres.css'

const Genres = (props) => {
	const {genre: {id, name}} = props
	const dispatch = useDispatch()
	return (

		<div>
			<h1>{name}</h1>
			<NavLink to={'movies'}>
				<button onClick={() => dispatch(moviesFilter({id}))}>Movies</button>
			</NavLink>
		</div>
	);
};

export default Genres;