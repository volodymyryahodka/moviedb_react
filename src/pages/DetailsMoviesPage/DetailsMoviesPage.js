import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';

import DetailsMovies from '../../Components/DetailsMovies/DetailsMovies';
import './DetailsMoviesPage.css'
import {getMoviesDetails} from "../../store/slice/moviesDetails.slice";

const DetailsMoviesPage = () => {
	const {movie, status, error} = useSelector(state => state['moviesDetailsReducer'])
	const dispatch = useDispatch()
	const {id} = useParams()
	useEffect(() => {
		dispatch(getMoviesDetails(id))
	}, [])

	return (
		<div>
			<div className={'genresMoviesPageDetails'}>
				<div>
					{status === 'pending' && <h1>Loading...</h1>}
					{error && <h1>{error}</h1>}
					<DetailsMovies movie={movie}/>
				</div>
			</div>
		</div>
	);
};

export default DetailsMoviesPage;