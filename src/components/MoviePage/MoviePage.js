import React from 'react';
import {NavLink} from 'react-router-dom';
import {apiImg} from '../../urls/urls';
import {moviesPage} from "../../pages/MoviesPage/MoviesPage";

const MoviePage = (props) => {

	const {movie: {id, original_title, release_date, poster_path}} = props;

	return (
		<div>

			<div className={'photo'}>
				<img src={apiImg + poster_path} alt={original_title}/>
			</div>

			<div className={'details'}>
				<h3>{original_title}</h3>
				<p>{release_date}</p>
				<NavLink to={`${id.toString()}/${original_title}`}>
					<button>Details</button>
				</NavLink>
			</div>

		</div>
	);
};

export default MoviePage;